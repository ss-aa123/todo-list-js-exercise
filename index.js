// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  /* instead of this -->
      taskTitles.push(title);
      taskDescriptions.push(description);
      taskComplete.push(false);
    which can lead to messiness, we can use an object to keep track of the state instead */

    const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}


// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
    /* instead of -->
      const title = taskTitles[taskIndex];
      const complete = taskComplete[taskIndex];
      con`sole.log(`${title} has${complete ? " " : " not "}been completed`);
    do this instead --> */

  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
  }


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  //instead of  --> taskComplete[taskIndex] = true;
  task.complete = true;
}


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks)
