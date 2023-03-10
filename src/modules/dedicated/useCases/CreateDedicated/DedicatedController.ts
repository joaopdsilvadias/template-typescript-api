import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDedicatedUseCase } from "./CreateDedicatedUseCase";

export class CreateDedicatedController {
    async handle(request: Request, response: Response) {
        const { name, cpu, ram, bandwidth, disk, price } = request.body;

        if (!name || !cpu || !ram || !bandwidth || !disk || !price) {
            return response.status(400).json({
                error: "Missing parameters!"
            });
        }

        const createDedicatedUseCase = container.resolve(CreateDedicatedUseCase);

        const dedicated = createDedicatedUseCase.execute({
            name: "teste",
            cpu,
            ram,
            bandwidth,
            disk,
            price
        });
        
        
        console.log(dedicated)

        return response.status(201).json(dedicated);

    }
}