import * as express from 'express';
import { ridesRouter } from './rides';

const v1Router = express.Router();

v1Router.use('/rides', ridesRouter);

export { v1Router };
