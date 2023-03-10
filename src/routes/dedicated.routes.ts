import { Router } from "express";

import { CreateDedicatedController } from "../modules/dedicated/useCases/CreateDedicated/DedicatedController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const createDedicatedController = new CreateDedicatedController();

const dedicatedRoutes = Router();

dedicatedRoutes.post("/", ensureAuthenticated, createDedicatedController.handle);

export { dedicatedRoutes };