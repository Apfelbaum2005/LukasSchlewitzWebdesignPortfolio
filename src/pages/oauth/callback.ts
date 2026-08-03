import type { APIRoute } from 'astro';

// Step 2 of the Decap CMS GitHub login: GitHub redirects back here with a
// one-time "code". We exchange it server-side for an access token (this is
// the only step that needs the client secret) and hand the token back to the
// Decap CMS popup via postMessage, following the handshake it expects.
export const prerender = false;

function popupResponse(message: string): Response {
  const html = `<!doctype html>
<html>
<body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body>
</html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

export const GET: APIRoute = async ({ url }) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return popupResponse(`authorization:github:error:${JSON.stringify({ error })}`);
  }

  if (!clientId || !clientSecret) {
    return popupResponse(
      `authorization:github:error:${JSON.stringify({ error: 'OAuth is not configured on the server.' })}`
    );
  }

  if (!code) {
    return popupResponse(`authorization:github:error:${JSON.stringify({ error: 'Missing authorization code.' })}`);
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: new URL('/oauth/callback', url.origin).toString()
      })
    });

    const tokenData = (await tokenResponse.json()) as { access_token?: string; error_description?: string };

    if (!tokenData.access_token) {
      return popupResponse(
        `authorization:github:error:${JSON.stringify({ error: tokenData.error_description || 'GitHub did not return an access token.' })}`
      );
    }

    return popupResponse(
      `authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: 'github' })}`
    );
  } catch {
    return popupResponse(`authorization:github:error:${JSON.stringify({ error: 'Token exchange failed.' })}`);
  }
};
