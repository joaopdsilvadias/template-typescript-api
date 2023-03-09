import { container } from "tsyringe";
import { UserRepository } from "../../modules/users/repositories/implements/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UserRepository
)