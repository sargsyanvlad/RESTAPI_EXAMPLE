export interface IRead<T> {
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  findWithPagination(limit: number, offset: number): Promise<T[]>;
}
