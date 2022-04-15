
import { IWrite, IRead } from '../interfaces/';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly model: any;

  //we created constructor with arguments to manipulate sequelize operations
  constructor(model: any) {
    this.model = model;
  }

  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<any> {
    throw new Error('Method not implemented.');
  }

  update(id: number, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }

  findWithPagination(limit: number, offset: number): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
