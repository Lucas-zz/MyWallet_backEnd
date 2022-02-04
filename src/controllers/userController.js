export async function getUser(request, response) {
    const { user } = request.locals;

    delete user.password;

    response.send(user);
}