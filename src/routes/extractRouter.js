import { Router } from 'express';
import { getExtract } from '../controllers/extractController.js';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware.js';

const extractRouter = Router();

extractRouter.use(tokenValidationMiddleware);
extractRouter.get('/entries', getExtract);

export default extractRouter;