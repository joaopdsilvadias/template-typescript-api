import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/exceptions/AppError";
import { IDedicatedDTO } from "../../dtos/IDedicatedDTOS";
import { IDedicatedRepository } from "../../repositories/IDedicatedRepository";

@injectable()
export class CreateDedicatedUseCase {
    constructor(
        @inject("dedicatedRepository")
        private dedicatedsRepository: IDedicatedRepository,
    ) {}

    async execute({ name, cpu, ram, bandwidth, disk, price }: IDedicatedDTO) {

        if (!name || !cpu || !ram || !bandwidth || !disk || !price) {
            throw new AppError("Missing parameters", 400);
        }

        console.log(name, cpu, ram, bandwidth, disk, price)

        const dedicated = await this.dedicatedsRepository.createDedicatedServer({
            name,
            cpu,
            ram,
            bandwidth,
            disk,
            price
        });
        return dedicated;

    }
}