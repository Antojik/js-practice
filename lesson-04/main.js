import tasks from "../lesson-03/data.js";
import { countByPriority } from "../lesson-03/utils.js";

console.log("start");

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};

const fetchTaskById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskById = tasks.find((task) => task.id === id);
      if (!taskById) {
        reject(new Error("Cant find task"));
      } else {
        resolve(taskById);
      }
    }, 500);
  });
};

delay(1000).then(() => console.log("1 second spend"));

fetchTasks()
  .then((data) => countByPriority(data))
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Donwload completed"));

fetchTaskById(2)
  .then((result) => console.log("Task by id:", result))
  .catch((error) => console.log("Error:", error.message));

fetchTaskById(99)
  .then((result) => console.log("Task by id:", result))
  .catch((error) => console.log("Error:", error.message));

console.log("stop");
