import * as express from 'express';
import { ridesRouter } from './rides';
import UserController from '../../controllers/users.controller';
import UsersService from '../../services/users.service';

const userService = new UsersService();
const userController = new UserController(userService);

const usersRouter = express.Router();

usersRouter.use('/rides', ridesRouter);

usersRouter.get('/me', userController.getMe);

export { usersRouter };
