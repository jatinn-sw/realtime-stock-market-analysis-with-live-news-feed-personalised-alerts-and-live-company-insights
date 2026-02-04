'use server';

import { connectToDatabase } from "@/database/mongoose";

export const getAllUsersForNewsEmail = async () => {
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('Mongoose connection not connected');

        const [userDocs, unsubscribedEmails] = await Promise.all([
            db.collection('user').find(
                { email: { $exists: true, $ne: null } },
                { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
            ).toArray(),
            db.collection('email_unsubscribes').find({}).project({ email: 1 }).toArray(),
        ]);

        const unsubscribedSet = new Set(
            (unsubscribedEmails as { email: string }[]).map((d) => d.email?.toLowerCase().trim()).filter(Boolean)
        );

        return userDocs
            .filter((user) => user.email && user.name && !unsubscribedSet.has((user.email as string).toLowerCase().trim()))
            .map((user) => ({
                id: user.id || user._id?.toString() || '',
                email: user.email,
                name: user.name
            }));
    } catch (e) {
        console.error('Error fetching users for news email:', e)
        return []
    }
}