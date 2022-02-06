import userSchema from "../schemas/userSchema.js";

export default function userSchemaValidationMiddleware(request, response, next) {
    const validation = userSchema.validate(request.body);
    if (validation.error) {
        return response.status(422).send(validation.error.details.map(error => error.message));
    }

    next();
}