import { Ride } from '../../entities/Ride';
import { RidesRepository } from '../../repositories/rides.repository';

class RidesService {
  private repository: RidesRepository;
  constructor(repository: RidesRepository) {
    this.repository = repository;
  }

  public async createRide(data: Ride) {
    return this.repository.create(data);
  }

  public async deleteRide(rideId: number) {
    return this.repository.delete(rideId);
  }

  public async getAllRides() {
    return this.repository.findAll();
  }

  public async getRide(rideId: number) {
    return this.repository.findOne(rideId);
  }

  public async getRidesWithOffsetLimit(limit: number, page: number) {
    const offset = limit * page - limit;
    return this.repository.findWithPagination(limit, offset);
  }
}

export default RidesService;
