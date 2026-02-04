import { NextRequest } from 'next/server';
import { unsubscribeEmail } from '@/lib/actions/email-preferences.actions';
import { verifyUnsubscribeToken } from '@/lib/utils/unsubscribe';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
        return new Response(renderPage(false, 'Invalid link. Missing email or token.'), {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: 400,
        });
    }

    if (!verifyUnsubscribeToken(email, token)) {
        return new Response(renderPage(false, 'Invalid or expired unsubscribe link. Please use the link from your latest email.'), {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: 400,
        });
    }

    const result = await unsubscribeEmail(email);
    if (!result.success) {
        return new Response(renderPage(false, result.error || 'Something went wrong. Please try again later.'), {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: 500,
        });
    }

    return new Response(renderPage(true), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        status: 200,
    });
}

function renderPage(success: boolean, message?: string): string {
    const isSuccess = success;
    const title = isSuccess ? "You're unsubscribed" : 'Unsubscribe failed';
    const body = isSuccess
        ? `<p>You will no longer receive marketing or news summary emails from MarketSense.</p>
           <p>You can sign up again anytime from your account settings if you change your mind.</p>`
        : `<p>${message ?? 'Something went wrong.'}</p>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - MarketSense</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #050505; color: #e5e7eb; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
    .card { max-width: 420px; background: #141414; border: 1px solid #30333A; border-radius: 12px; padding: 32px; text-align: center; }
    h1 { margin: 0 0 16px; font-size: 22px; color: #FDD458; }
    p { margin: 0 0 12px; font-size: 15px; line-height: 1.5; color: #9ca3af; }
    a { color: #FDD458; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    ${body}
    <p style="margin-top: 24px;"><a href="${process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL || '/'}">Back to MarketSense</a></p>
  </div>
</body>
</html>`;
}
