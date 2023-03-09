import { User } from '@prisma/client';
import prisma from '../../../../database';
import { ICreateUserDTO } from '../../dtos/iCreateUsersDTO';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {

   async create(data: ICreateUserDTO): Promise<User> {
        return prisma.user.create({
            data
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return prisma.user.findFirst({
            where: {
                email
            }
        });
    }
    
    async findById(id: string): Promise<User | null> {
        return prisma.user.findFirst({
            where: {
                id
            }
        });
    }

    async deleteUser(id: string): Promise<User | null> {
        return prisma.user.delete({
            where: {
                id
            }
        });
    }

    async updateUser(id: string, data: ICreateUserDTO): Promise<User | null> {
        return prisma.user.update({
            where: {
                id
            },
            data
        });
    }
}
