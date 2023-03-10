import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/CreateUser/CreateUserController";
import { FindUserByIdController } from "../modules/users/useCases/FindUser/FindUserByIdController";
import { DeleteUserController } from "../modules/users/useCases/DeleteUser/DeleteUserController";
import { UpdateUserController } from "../modules/users/useCases/UpdateUser/UpdateUserController";
import { AuthenticateUserController } from "../modules/users/useCases/AuthenticateUser/AuthenticateUserController";

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", findUserByIdController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);

usersRoutes.post("/login", authenticateUserController.handle);

export { usersRoutes };