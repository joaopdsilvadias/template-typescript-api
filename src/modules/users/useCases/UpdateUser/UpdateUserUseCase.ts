import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/exceptions/AppError";
import { ICreateUserDTO } from "../../dtos/iCreateUsersDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class UpdateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    async execute(id: string, data: ICreateUserDTO) {

        const userExists = await this.usersRepository.findById(id);

        if (!userExists) {
            throw new AppError("User does not exist!", 400)
        } 
        
        const user = await this.usersRepository.updateUser(id, data);
        
        return user;
    }
}