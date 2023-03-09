import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, password } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        const user = await updateUserUseCase.execute(id, {
            name,
            email,
            password
        });

        return response.status(201).json(user);
    }
}