import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { CONTACT_EMAIL } from '../../data/consts';

// Sends contact form submissions by email, so this route must run server-side on every request.
export const prerender = false;

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  // Honeypot: real visitors never see or fill this field, spam bots usually do.
  website?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Ungültige Anfrage.' }, 400);
  }

  if (payload.website) {
    return jsonResponse({ ok: true });
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  if (!email || !EMAIL_PATTERN.test(email)) {
    return jsonResponse({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, 400);
  }
  if (!message) {
    return jsonResponse({ error: 'Bitte geben Sie eine Nachricht ein.' }, 400);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: SMTP is not configured (missing SMTP_HOST/SMTP_USER/SMTP_PASS env vars).');
    return jsonResponse(
      { error: `Der Nachrichtenversand ist derzeit nicht verfügbar. Bitte schreiben Sie uns direkt an ${CONTACT_EMAIL}.` },
      500
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  try {
    await transporter.sendMail({
      from: `"Kontaktformular" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name || email}`,
      text: [
        `Name: ${name || '-'}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || '-'}`,
        '',
        'Nachricht:',
        message
      ].join('\n')
    });
  } catch (error) {
    console.error('Contact form: failed to send email.', error);
    return jsonResponse({ error: 'Der Nachrichtenversand ist fehlgeschlagen. Bitte versuchen Sie es erneut.' }, 500);
  }

  return jsonResponse({ ok: true });
};
