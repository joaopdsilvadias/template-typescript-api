import 'reflect-metadata';
import 'express-async-errors';
import './shared/container'
import AppError from './shared/exceptions/AppError'
import express, { NextFunction, Request, Response} from 'express';
import routes from './routes';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.use((error: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        status: error.status,
        message: error.message,
      });
    }
  
    return response.status(500).json({
      status: 500,
      message: `Internal Server Error - ${error.message}`,
    });
  });

export default server;