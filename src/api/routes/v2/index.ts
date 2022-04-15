import * as express from 'express';
import { usersRouter } from './users';

const v2Router = express.Router();

v2Router.use('/users', usersRouter);

export { v2Router };
