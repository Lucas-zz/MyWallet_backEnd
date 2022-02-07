import { Router } from "express";
import authRouter from "./authRouter.js";
import entryRouter from "./entryRouter.js";
import extractRouter from "./extractRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(entryRouter);
router.use(extractRouter);

export default router;