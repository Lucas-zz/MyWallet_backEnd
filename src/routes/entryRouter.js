import { Router } from 'express';
import { postEntry } from '../controllers/entryController.js';
import entrySchemaValidationMiddleware from '../middlewares/entrySchemaValidationMiddleware.js';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware.js';

const entryRouter = Router();

entryRouter.use(tokenValidationMiddleware);
entryRouter.post('/entry', entrySchemaValidationMiddleware, postEntry);

export default entryRouter;
