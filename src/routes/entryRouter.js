import { Router } from 'express';
import { deleteEntry, postEntry } from '../controllers/entryController.js';
import entrySchemaValidationMiddleware from '../middlewares/entrySchemaValidationMiddleware.js';
import tokenValidationMiddleware from '../middlewares/tokenValidationMiddleware.js';

const entryRouter = Router();

entryRouter.use(tokenValidationMiddleware);
entryRouter.post('/entry', entrySchemaValidationMiddleware, postEntry);
entryRouter.delete('/entry/:id', deleteEntry);

export default entryRouter;
