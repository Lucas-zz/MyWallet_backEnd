import { Router } from 'express';
import { postEntry } from '../controllers/entryController';
import entrySchemaValidationMiddleware from '../middlewares/entrySchemaValidationMiddleware';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware';


const entryRouter = Router();

entryRouter.use(tokenValidationMiddleware);
entryRouter.post('/entry', entrySchemaValidationMiddleware, postEntry);

export default entryRouter;
