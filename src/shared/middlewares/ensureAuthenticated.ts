import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../modules/users/repositories/implements/UserRepository";
import AppError from "../exceptions/AppError";

import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;


    if (!authToken) {
        throw new AppError("Token missing", 401);
    }

    try {
        const decode = verify(authToken, String(process.env.JWT_SECRET));

        const { id: userId } = decode as { id: string };

        const usersRepository = new UserRepository();

        const user = usersRepository.findById(String(userId));

        if (!user) {
            throw new AppError("User does not exists", 401);
        }

        request.userId = userId;

        return next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
}