import { Router } from "express";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/v1/users", usersRoutes);

export default routes;