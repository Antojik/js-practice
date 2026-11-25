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

export default tasks;
