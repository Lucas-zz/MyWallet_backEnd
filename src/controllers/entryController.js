import db from '../db.js';
import { stripHtml } from 'string-strip-html';
// import { ObjectId } from 'mongodb';

export async function postEntry(request, response) {
    const user = response.locals.user;
    const entry = request.body;

    entry.value = stripHtml(entry.value).result.trim();
    entry.type = stripHtml(entry.type).result.trim();
    entry.description = stripHtml(entry.description).result.trim();

    try {
        await db.collection('entries').insertOne({ ...entry, date: Date.now(), userId: user._id });

        response.status(201).send(entry);

    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
}