import { inject, injectable } from "tsyringe";
import { IDedicatedDTO } from "../../dtos/IDedicatedDTOS";
import { IDedicatedRepository } from "../../repositories/IDedicatedRepository";

@injectable()
export class ListAllDedicatedUseCase {
    constructor(
        @inject("DedicatedRepository")
        private dedicatedsRepository: IDedicatedRepository,
    ) {}

    async execute() {

        const dedicated = await this.dedicatedsRepository.getDedicatedServers();

        return dedicated;

    }
}