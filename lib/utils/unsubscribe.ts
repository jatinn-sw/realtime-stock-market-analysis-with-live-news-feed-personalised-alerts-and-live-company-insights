import { createHmac, timingSafeEqual } from 'node:crypto';

const UNSUBSCRIBE_SECRET = process.env.BETTER_AUTH_SECRET || process.env.UNSUBSCRIBE_SECRET || 'unsubscribe-secret';
const BASE_URL = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

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
