import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllDedicatedUseCase } from "./ListAllDedicatedUseCase";

export class ListAllDedicatedController {
    async handle(request: Request, response: Response) {

        const listAllDedicatedUseCase = container.resolve(ListAllDedicatedUseCase);

        const dedicated = await listAllDedicatedUseCase.execute();

        return response.status(200).json(dedicated);

    }
}