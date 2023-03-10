import { Dedicated } from "@prisma/client"
import { IDedicatedDTO } from "../dtos/IDedicatedDTOS";

export interface IDedicatedRepository {
    createDedicatedServer(data: IDedicatedDTO): Promise<Dedicated>;
    getDedicatedServers(): Promise<Dedicated[]>;
}
