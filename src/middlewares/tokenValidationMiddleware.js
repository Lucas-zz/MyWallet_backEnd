import db from "../db.js";

export default async function tokenValidationMiddleware(request, response, next) {
    const { authorization } = request.headers;
    const token = authorization?.replace('Bearer ', '')

    if (!token) {
        return response.send('No Bearer').status(401);
    }

    try {
        const session = await db.collection('sessions').findOne({ token });
        if (!session) {
            return response.send('No Session').status(401);
        }

        const user = await db.collection('users').findOne({ _id: session.userId });
        if (!user) {
            return response.send('No User').status(401);
        }

        response.locals.user = user;
        next();
    } catch (error) {
        console.log(error);
        response.send(error).status(500);
    }
}