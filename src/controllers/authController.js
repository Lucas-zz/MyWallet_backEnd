import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';

export async function signUp(request, response) {
    const user, { email } = request.body;
    user.name = stripHtml(user.name).result.trim();

    try {
        const isRegistered = await db.collection('users').findOne({ email });

        if (isRegistered) {
            response.status(409).send('Email já cadastrado!');
        }
        const passwordHash = bcrypt.hashSync(user.password, 10);

        await db.collection('users').insertOne({ ...user, password: passwordHash });

        response.sendStatus(201);
    } catch {
        response.sendStatus(501);
    }
}

export async function signIn(request, response) {
    const { email, password } = request.body;

    const user = await db.collection('users').findOne({ email });
    console.log(user);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = uuid();

        console.log(user);

        await db.collection('sessions').insertOne({ token, userId: user._id });

        response.send(token);
    } else {
        response.sendStatus(401);
    }
}
