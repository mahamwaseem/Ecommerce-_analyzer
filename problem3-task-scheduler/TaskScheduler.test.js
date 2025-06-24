const Task = require('./Task');
const TaskScheduler = require('./TaskScheduler');

test('generateSchedule groups tasks by employeeId', () => {
  const tasks = [
    new Task('Review PR', 'emp1', 2),
    new Task('Deploy App', 'emp1', 1),
    new Task('Fix Bug', 'emp2', 3)
  ];

  const scheduler = new TaskScheduler(tasks);
  const schedule = scheduler.generateSchedule();

  expect(schedule.emp1).toEqual([
    'Review PR - 2h',
    'Deploy App - 1h'
  ]);

  expect(schedule.emp2).toEqual([
    'Long: Fix Bug - 3h'
  ]);
});
