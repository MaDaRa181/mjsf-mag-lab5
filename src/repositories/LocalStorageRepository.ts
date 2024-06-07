import { IRepository } from './TaskRepository';

export class LocalStorageRepository<T extends { id: number }> implements IRepository<T> {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  private getData(): T[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveData(data: T[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  async getAll(): Promise<T[]> {
    return this.getData();
  }

  async create(item: T): Promise<void> {
    const data = this.getData();
    data.push(item);
    this.saveData(data);
  }

  async update(item: T): Promise<void> {
    let data = this.getData();
    data = data.map(d => (d.id === item.id ? item : d));
    this.saveData(data);
  }

  async delete(id: number): Promise<void> {
    let data = this.getData();
    data = data.filter(d => d.id !== id);
    this.saveData(data);
  }
}
