import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/exceptions/AppError";
import { ICreateUserDTO } from "../../dtos/iCreateUsersDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class FindUserById {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    async execute(id: string) {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User not found!", 404);
        }

        return user;
    }
}