'use server';

import { connectToDatabase } from '@/database/mongoose';

export async function isUnsubscribed(email: string): Promise<boolean> {
    if (!email) return false;
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) return true;
        const doc = await db.collection('email_unsubscribes').findOne(
            { email: email.toLowerCase().trim() }
        );
        return !!doc;
    } catch (e) {
        console.error('isUnsubscribed error:', e);
        return true;
    }
}

export async function unsubscribeEmail(email: string): Promise<{ success: boolean; error?: string }> {
    if (!email?.trim()) return { success: false, error: 'Email is required' };
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) return { success: false, error: 'Database not available' };
        const normalized = email.toLowerCase().trim();
        await db.collection('email_unsubscribes').updateOne(
            { email: normalized },
            { $set: { email: normalized, updatedAt: new Date() } },
            { upsert: true }
        );
        return { success: true };
    } catch (e) {
        console.error('unsubscribeEmail error:', e);
        return { success: false, error: e instanceof Error ? e.message : 'Failed to unsubscribe' };
    }
}
