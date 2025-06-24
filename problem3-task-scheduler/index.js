const Task = require('./Task');
const TaskScheduler = require('./TaskScheduler');

const tasks = [
  new Task('Review PR', 'emp1', 2),
  new Task('Deploy App', 'emp1', 1),
  new Task('Fix Bug', 'emp2', 3)
];

const scheduler = new TaskScheduler(tasks);
console.log(scheduler.generateSchedule());
