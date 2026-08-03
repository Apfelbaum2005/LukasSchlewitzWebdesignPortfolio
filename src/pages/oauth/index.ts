import type { APIRoute } from 'astro';

// Step 1 of the Decap CMS GitHub login: Decap opens this route in a popup,
// we send the visitor on to GitHub's own authorization screen.
export const prerender = false;

export const GET: APIRoute = ({ url, redirect }) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response('OAUTH_GITHUB_CLIENT_ID is not configured on the server.', { status: 500 });
  }

  const redirectUri = new URL('/oauth/callback', url.origin).toString();

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    redirect_uri: redirectUri
  });

  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};
