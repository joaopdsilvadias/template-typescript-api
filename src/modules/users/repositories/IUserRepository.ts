import { User } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/iCreateUsersDTO';

export interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    deleteUser(id: string): Promise<User | null>;
    updateUser(id: string, data: ICreateUserDTO): Promise<User | null>;
}