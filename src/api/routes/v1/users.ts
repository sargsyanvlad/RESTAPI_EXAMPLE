import * as express from 'express';
const ridesRouter = express.Router();
import * as ridesValidator from '../../middlewares/rides.middleware';
import models from '../../../db/models';
import RidesController from '../../controllers/rides.controller';
import RidesService from '../../services/rides.service';
import { RidesRepository } from '../../../repositories/rides.repository';

const ridesRepository = new RidesRepository(models.Rides);
const ridesService = new RidesService(ridesRepository);
const ridesController = new RidesController(ridesService);

ridesRouter.post('/', ridesValidator.createRides, ridesController.createRide);

ridesRouter.get('/', ridesController.getRides);

ridesRouter.get('/:id', ridesValidator.getRides, ridesController.getRideById);

ridesRouter.delete('/:id', ridesValidator.deleteRide, ridesController.deleteRideById);

export { ridesRouter };
