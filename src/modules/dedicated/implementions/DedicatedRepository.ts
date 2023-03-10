import { Dedicated } from "@prisma/client";
import prisma from "../../../database";
import { IDedicatedDTO } from "../dtos/IDedicatedDTOS";
import { IDedicatedRepository } from "../repositories/IDedicatedRepository";

export class DedicatedRepository implements IDedicatedRepository {
    async getDedicatedServers(): Promise<Dedicated[]> {
        return prisma.dedicated.findMany();
    }

    async createDedicatedServer(data: IDedicatedDTO): Promise<Dedicated> {
        console.log(data)

        return prisma.dedicated.create({
            data: data
        });
    }
}