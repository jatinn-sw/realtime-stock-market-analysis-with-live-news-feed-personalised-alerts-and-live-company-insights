import { createHmac, timingSafeEqual } from 'node:crypto';

const UNSUBSCRIBE_SECRET = process.env.BETTER_AUTH_SECRET || process.env.UNSUBSCRIBE_SECRET || 'unsubscribe-secret';

/** Base URL for unsubscribe links. Prefers deployed app URL so the page always opens on the live app, not localhost. */
function getUnsubscribeBaseUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BASE_URL;
    if (explicit && !explicit.includes('localhost')) return explicit.replace(/\/$/, '');
    // Use deployment URL when available (e.g. Vercel) so unsubscribe links never point to localhost
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return explicit || 'http://localhost:3001';
}

const BASE_URL = getUnsubscribeBaseUrl();

function getToken(email: string): string {
    return createHmac('sha256', UNSUBSCRIBE_SECRET).update(email.toLowerCase().trim()).digest('hex');
}

export function getUnsubscribeUrl(email: string): string {
    const token = getToken(email);
    const params = new URLSearchParams({ email: email.trim(), token });
    return `${BASE_URL.replace(/\/$/, '')}/api/unsubscribe?${params.toString()}`;
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
    if (!email || !token) return false;
    const expected = getToken(email);
    if (expected.length !== token.length) return false;
    try {
        return timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(token, 'hex'));
    } catch {
        return false;
    }
}
