import { App } from 'vue';
import { TaskService } from '../services/TaskService';
import { LocalStorageRepository } from '../repositories/LocalStorageRepository';
import { Task } from '../models/TaskTypes';

export default {
  install(app: App) {
    const repository = new LocalStorageRepository<Task>('tasks');
    const taskService = new TaskService(repository);

    app.provide('taskService', taskService);
  }
};
