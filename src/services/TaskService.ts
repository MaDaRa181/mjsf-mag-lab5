import { IRepository } from '../repositories/TaskRepository';
import { Task } from '../models/TaskTypes';

export class TaskService {
  private repository: IRepository<Task>;

  constructor(repository: IRepository<Task>) {
    this.repository = repository;
  }

  async getAllTasks(): Promise<Task[]> {
    return this.repository.getAll();
  }

  async addTask(task: Task): Promise<void> {
    return this.repository.create(task);
  }

  async updateTask(task: Task): Promise<void> {
    return this.repository.update(task);
  }

  async deleteTask(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
