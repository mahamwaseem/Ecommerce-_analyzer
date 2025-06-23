import { Task } from './Task.js';

export class TaskScheduler {
  constructor(tasks) {
    this.tasks = tasks;
  }

  #formatTask(task) {
    if (task.duration > 2) {
      return `Long: ${task.title} - ${task.duration}h`;
    }
    return `${task.title} - ${task.duration}h`;
  }

  generateSchedule() {
    const schedule = {};
    for (const task of this.tasks) {
      const formatted = this.#formatTask(task);
      schedule[task.employeeId] = schedule[task.employeeId] || [];
      schedule[task.employeeId].push(formatted);
    }
    return schedule;
  }
}
