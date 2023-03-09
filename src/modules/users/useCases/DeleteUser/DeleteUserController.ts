import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUser } from "./DeleteUserUseCase";

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({ message: "Missing id!" });
        }

        const deleteUserUseCase = container.resolve(DeleteUser);

        await deleteUserUseCase.execute(id);

        return response.json({ message: "User deleted!" });
    }
}