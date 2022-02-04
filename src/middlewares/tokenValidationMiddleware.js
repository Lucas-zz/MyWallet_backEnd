import db from "../db.js";

export default async function tokenValidationMiddleware(request, response, next) {
    const { authorization } = request.headers;
    const token = authorization?.replace('Bearer ', '')
    if (!token) {
        return response.sendStatus(401)
    }

    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
        return response.sendStatus(401)
    }

    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) {
        return response.sendStatus(401);
    }

    response.locals.user = user;
    next();
}