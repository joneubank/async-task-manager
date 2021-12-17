import longProcess from './longProcess';
import TaskManager from '../TaskManager';
import Task from '../Task';

const test = async () => {
  const taskManager = new TaskManager({ maxConcurrent: 1, updateInterval: 500 });
  const task1 = new Task(longProcess(1200));
  const task2 = new Task(longProcess(1500));

  console.log('Initialized...');
  console.log(taskManager.status());

  taskManager.run(task1);
  console.log('Running...');
  console.log(taskManager.status());

  taskManager.run(task2);
  console.log('Queued...');
  console.log(taskManager.status());

  const scheduledRun = taskManager.schedule(task1, new Date(Date.now() + 1500));
  console.log('Scheduled...');
  console.log(taskManager.status());
  console.log(scheduledRun);

  setTimeout(() => {
    console.log('Waited 1 seconds...');
    console.log(taskManager.status());
  }, 1000);
  setTimeout(() => {
    console.log('Waited 2 seconds...');
    console.log(taskManager.status());
  }, 2000);
  setTimeout(() => {
    console.log('Waited 3 seconds...');
    console.log(taskManager.status());
  }, 3000);
  setTimeout(() => {
    console.log('Waited 4 seconds...');
    console.log(taskManager.status());
  }, 4000);
  setTimeout(() => {
    console.log('Waited 5 seconds...');
    console.log(taskManager.status());
  }, 5000);
  setTimeout(() => {
    console.log('Waited 6 seconds...');
    console.log(taskManager.status());
  }, 6000);
};

test();