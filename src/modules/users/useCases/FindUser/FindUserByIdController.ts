import { container } from "tsyringe";
import { Request, Response } from "express";
import { FindUserById } from "./FindUserByIdUseCase";

export class FindUserByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findUserByIdUseCase = container.resolve(FindUserById);

        const user = await findUserByIdUseCase.execute(id);

        return response.json(user);
    }
}