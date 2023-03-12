import { Router } from "express";

import { CreateDedicatedController } from "../modules/dedicated/useCases/CreateDedicated/DedicatedController";
import { ListAllDedicatedController } from "../modules/dedicated/useCases/ListAllDedicated/ListAllDedicatedController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const createDedicatedController = new CreateDedicatedController();
const listAllDedicatedController = new ListAllDedicatedController();

const dedicatedRoutes = Router();

dedicatedRoutes.post("/", ensureAuthenticated, createDedicatedController.handle);
dedicatedRoutes.get("/", ensureAuthenticated, listAllDedicatedController.handle)


export { dedicatedRoutes };