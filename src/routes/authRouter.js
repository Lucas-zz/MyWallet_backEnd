import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-in', signIn);
authRouter.post('/sign-up', userSchemaValidationMiddleware, signUp);

export default authRouter;