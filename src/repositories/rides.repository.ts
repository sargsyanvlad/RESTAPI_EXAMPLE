import { BaseRepository } from './base/base.repository';
import { Ride } from '../entities/Ride';

export class RidesRepository extends BaseRepository<Ride> {
  count(): Promise<number> {
    return this.model.count({});
  }

  async create(item: any): Promise<Ride> {
    return this.model.create(item);
  }

  update(id: number, item: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<boolean> {
    return this.model.destroy({
      where: { rideId: id },
    });
  }

  findAll(): Promise<Ride[]> {
    return this.model.findAll();
  }

  findOne(id: number): Promise<Ride> {
    return this.model.findOne({
      where: { rideId: id },
    });
  }

  findWithPagination(limit: number, offset: number): Promise<Ride[]> {
    return this.model.findAndCountAll({
      limit,
      offset,
    });
  }
}
