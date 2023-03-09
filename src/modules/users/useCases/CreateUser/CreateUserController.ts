import { Request, Response } from "express";
import { hashSync } from "bcrypt";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(400).json({
                error: "Missing parameters!"
            });
        }

        const createUserUseCase = container.resolve(CreateUserUseCase);
        
        const passwordHash = hashSync(password, 10);

        const user = await createUserUseCase.execute({
            name,
            email,
            password: passwordHash
        });

        return response.status(201).json(user);
    }
}