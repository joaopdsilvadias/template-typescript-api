import { inject, injectable } from "tsyringe";
import jwt from "jsonwebtoken";
import { compareSync } from "bcrypt";
import AppError from "../../../../shared/exceptions/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ExcludeFields } from "../../../../shared/ExcludeFields";

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute(email: string, password: string) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User not Found", 401);
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!", 401);
        }

        const token = jwt.sign({ userId: user.id }, String(process.env.JWT_SECRET), {
            expiresIn: "1h",
        });

        return { user: ExcludeFields(user, ['password']), token }
    }
}