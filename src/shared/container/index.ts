import { container } from "tsyringe";
import { DedicatedRepository } from "../../modules/dedicated/implementions/DedicatedRepository";
import { IDedicatedRepository } from "../../modules/dedicated/repositories/IDedicatedRepository";
import { UserRepository } from "../../modules/users/repositories/implements/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UserRepository
)

container.registerSingleton<IDedicatedRepository>(
    "DedicatedRepository",
    DedicatedRepository
)