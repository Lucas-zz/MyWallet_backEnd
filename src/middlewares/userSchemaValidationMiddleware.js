import userSchema from "../schemas/userSchema.js";

export default function userSchemaValidationMiddleware(request, response, next) {
    const validation = userSchema.validate(request.body);
    if (validation.error) {
        return response.sendStatus(422);
    }

    next();
}