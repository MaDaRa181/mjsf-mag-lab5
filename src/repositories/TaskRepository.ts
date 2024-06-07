export interface IRepository<T> {
  getAll(): Promise<T[]>;
  create(item: T): Promise<void>;
  update(item: T): Promise<void>;
  delete(id: number): Promise<void>;
}
