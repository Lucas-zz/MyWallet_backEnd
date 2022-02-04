import { Router } from 'express';
import { getUser } from '../controllers/userController.js';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware.js';
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';

const userRouter = Router();

userRouter.use(tokenValidationMiddleware);
userRouter.post('/user', userSchemaValidationMiddleware, getUser);

export default userRouter;