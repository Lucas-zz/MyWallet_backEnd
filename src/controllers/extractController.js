
import db from '../db.js';

export async function getExtract(request, response) {
    const user = response.locals.user;

    try {
        const entries = await db.collection('entries').find({ userId: user._id }).toArray();
        response.send({ ...user, entries });
    } catch (error) {
        response.status(500).send(error);
    }
}