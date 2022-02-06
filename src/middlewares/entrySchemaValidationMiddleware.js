import entrySchema from "../schemas/entrySchema";

export default function entrySchemaValidationMiddleware(request, response, next) {
    const validation = entrySchema.validate(request.body);

    if (validation.error) {
        return response.status(422).send(validation.error.details.map(error => error.message));
    }

    next();
}