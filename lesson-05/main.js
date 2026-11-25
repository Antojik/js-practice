const tasks = [
  {
    id: 1,
    title: "Сверстать шапку",
    done: true,
    priority: "high",
    estimate: 3,
    assignee: { name: "Антон", role: "dev" },
  },
  {
    id: 2,
    title: "Подключить базу",
    done: false,
    priority: "high",
    estimate: 5,
    assignee: { name: "Мария", role: "dev" },
  },
  {
    id: 3,
    title: "Написать тесты",
    done: false,
    priority: "low",
    estimate: 2,
    assignee: { name: "Антон", role: "dev" },
  },
  {
    id: 4,
    title: "Настроить деплой",
    done: false,
    priority: "medium",
    estimate: 4,
    assignee: { name: "Мария", role: "devops" },
  },
];

const countByPriority = (tasks) => {
  return tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});
};

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

const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Anton" },
        { id: 2, name: "Maria" },
      ]);
    }, 800);
  });
};

const loadStats = async () => {
  try {
    const tasks = await fetchTasks();
    return countByPriority(tasks);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Done");
  }
};

const showTask = async (id) => {
  try {
    const task = await fetchTaskById(id);
    console.log(`task ${id}`, task.title);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Search is done");
  }
};

const loadSequential = async () => {
  try {
    console.time("sequential");
    const tasks = await fetchTasks();
    const users = await fetchUsers();
    console.log("Tasks count: ", tasks.length);
    console.log("Users count: ", users.length);
    console.timeEnd("sequential");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("DONE!");
  }
};

const loadParallel = async () => {
  try {
    console.time("parallel");
    const [tasks, users] = await Promise.all([fetchTasks(), fetchUsers()]);
    console.log("Tasks count: ", tasks.length);
    console.log("Users count: ", users.length);
    console.timeEnd("parallel");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("DONE!");
  }
};

const loadTaskByIds = async (ids) => {
  try {
    const promises = ids.map((id) => fetchTaskById(id));
    const result = await Promise.all(promises);
    return result;
  } catch (error) {
    console.log("Error", error.message);
  }
};

// loadStats().then((result) => console.log(result));
// showTask(2);
// showTask(99);
// loadSequential();
// loadParallel();
loadTaskByIds([1, 2, 99]).then((result) => console.log(result));
