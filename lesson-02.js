const tasks = [
  {
    id: 1,
    title: "Сверстать шапку",
    done: true,
    priority: "high",
    assignee: { name: "Антон", role: "dev" },
  },
  {
    id: 2,
    title: "Подключить базу",
    done: false,
    priority: "high",
    assignee: { name: "Мария", role: "dev" },
  },
  {
    id: 3,
    title: "Написать тесты",
    done: false,
    priority: "low",
    assignee: { name: "Антон", role: "dev" },
  },
];

const formatTask = ({ title, done, priority, assignee: { name } }) => {
  const isDone = done ? "✓" : "";
  const answer = `[${priority}] ${title} - ${name} ${isDone}`;
  return answer;
};

const createTask = ({ id, title, priority = "medium", done = false }) => {
  return { id, title, priority, done };
};

const addTask = (tasks, newTask) => {
  return [...tasks, newTask];
};

const updateTask = (tasks, id, changes) => {
  const answer = tasks.map((task) =>
    task.id === id ? { ...task, ...changes } : task,
  );
  return answer;
};

const removeTask = (tasks, id) => {
  return tasks.filter((task) => task.id !== id);
};

const withoutAssignee = ({ assignee, ...taskWithoutAssignee }) => {
  return taskWithoutAssignee;
};

const reassign = (tasks, id, newName) => {
  const answer = tasks.map((task) =>
    task.id === id
      ? { ...task, assignee: { ...task.assignee, name: newName } }
      : task,
  );
  return answer;
};

const changeRole = (tasks, id, newRole) => {
  const answer = tasks.map((task) =>
    task.id === id
      ? { ...task, assignee: { ...task.assignee, role: newRole } }
      : task,
  );
  return answer;
};

console.log("task 1 ---", tasks.map(formatTask));
console.log("task 2 ---", createTask({ id: 4, title: "Задеплоить" }));
console.log(
  "task 3 ---",
  addTask(tasks, createTask({ id: 4, title: "Задеплоить" })),
);
console.log(
  "task 4 ---",
  updateTask(tasks, 2, { done: true, priority: "low" }),
);
console.log("task 5 ---", removeTask(tasks, 3));
console.log("task 6 ---", tasks.map(withoutAssignee));
console.log("task 7 ---", reassign(tasks, 2, "Lola"));
console.log("оригинал цел?", tasks[1].assignee);
console.log("task 8 ---", changeRole(tasks, 3, "planner"));
console.log("оригинал цел?", tasks[2].assignee);
console.log(tasks);
