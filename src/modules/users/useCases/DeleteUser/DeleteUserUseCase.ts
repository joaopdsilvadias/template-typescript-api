import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/exceptions/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class DeleteUser {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    async execute(id: string) {
        
        const userExists = await this.usersRepository.findById(id);

        if (!userExists) {
            throw new AppError("User does not exist!", 400)
        } 
            
        const user = await this.usersRepository.deleteUser(id);

        return user;
    }
}