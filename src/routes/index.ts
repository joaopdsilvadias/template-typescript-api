import { Router } from "express";
import { dedicatedRoutes } from "./dedicated.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/v1/users", usersRoutes);
routes.use("/v1/dedicated", dedicatedRoutes);

export default routes;