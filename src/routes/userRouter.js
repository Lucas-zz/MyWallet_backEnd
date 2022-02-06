import { Router } from 'express';
import { getUser } from '../controllers/userController.js';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware.js';

const userRouter = Router();

userRouter.use(tokenValidationMiddleware);
userRouter.get('/user', getUser);

export default userRouter;