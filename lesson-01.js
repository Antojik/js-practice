const tasks = [
  { id: 1, title: "Сверстать шапку", done: true, priority: "high" },
  { id: 2, title: "Подключить базу", done: false, priority: "high" },
  { id: 3, title: "Написать тесты", done: false, priority: "low" },
  { id: 4, title: "Обновить README", done: true, priority: "low" },
  { id: 5, title: "Настроить деплой", done: false, priority: "medium" },
];

const getTitles = (tasks) => tasks.map((task) => task.title);

const getActive = (tasks) => tasks.filter((task) => !task.done);

const getByPriority = (tasks, priority) => {
  return tasks.filter((task) => task.priority === priority);
};

const findTask = (tasks, id) => tasks.find((task) => task.id === id);

const countDone = (tasks) => tasks.filter((task) => task.done).length;

const hasHighPriorityActive = (tasks) => {
  return tasks.some((task) => task.priority === "high" && !task.done);
};

const toggleTask = (tasks, id) => {
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task,
  );
};

console.log("Titles", getTitles(tasks));
console.log("Active", getActive(tasks));
console.log("getByPrio", getByPriority(tasks, "low"));
console.log("findTask", findTask(tasks, 3));
console.log("CountDone", countDone(tasks));
console.log("HighPrio", hasHighPriorityActive(tasks));
console.log("ToggleTask", toggleTask(tasks, 2));
console.log("Tasks", tasks);
