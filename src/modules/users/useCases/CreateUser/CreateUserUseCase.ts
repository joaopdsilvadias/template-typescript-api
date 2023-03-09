import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/exceptions/AppError";
import { ICreateUserDTO } from "../../dtos/iCreateUsersDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    async execute({ name, email, password }: ICreateUserDTO) {
        const userExist = await this.usersRepository.findByEmail(email);

        if (userExist) {
            throw new AppError("User already exists!", 400)
        }

       const user = await this.usersRepository.create({
            name,
            email,
            password
        });

        return user;

    }
}