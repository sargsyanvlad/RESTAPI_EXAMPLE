import RidesService from '../services/rides.service';
import { Ride } from '../../entities/Ride';
import { Logger } from '../../lib';
import { constants } from '../../config';
const {
  Errors: { SOMETHING_WENT_WRONG, RIDES_NOT_FOUND_ERROR },
  statusCodes,
} = constants;

class RidesController {
  private ridesService: RidesService;
  constructor(ridesService: RidesService) {
    this.ridesService = ridesService;
  }

  public createRide = async (req, res, next) => {
    try {
      const { body } = req;

      const ride = new Ride(
        body.start_long,
        body.start_lat,
        body.end_lat,
        body.end_long,
        body.driver_name,
        body.rider_name,
        body.driver_vehicle,
      );

      const rows = await this.ridesService.createRide(ride);

      res.status(statusCodes.CREATED).json(rows);
      return;
    } catch (err) {
      Logger.error(err);
      await next(SOMETHING_WENT_WRONG);
    }
  };

  public getRides = async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      if (page > 0 && limit > 0) {
        const rows = await this.ridesService.getRidesWithOffsetLimit(limit, page);
        if (rows.length !== 0) return res.status(statusCodes.OK).json(rows);
        res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
        return;
      } else {
        const rows = await this.ridesService.getAllRides();
        if (rows.length !== 0) return res.status(statusCodes.OK).json(rows);
        res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
        return;
      }
    } catch (err) {
      Logger.error(err);
      await next(SOMETHING_WENT_WRONG);
    }
  };

  public getRideById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rows = await this.ridesService.getRide(id);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };

  public deleteRideById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rows = await this.ridesService.deleteRide(id);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };

  public getWithOffsetLimit = async (req, res, next) => {
    try {
      const { limit, offset } = req.params;
      const rows = await this.ridesService.getRidesWithOffsetLimit(limit, offset);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };
}

export default RidesController;
