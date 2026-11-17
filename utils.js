export const totalEstimate = (tasks) => {
  return tasks.reduce((acc, task) => acc + task.estimate, 0);
};

export const remainingEstimate = (tasks) => {
  return tasks
    .filter((task) => !task.done)
    .reduce((acc, task) => acc + task.estimate, 0);
};

export const countByPriority = (tasks) => {
  return tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});
};

export const groupByAssignee = (tasks) => {
  return tasks.reduce((acc, task) => {
    const name = task.assignee.name;
    const oldTitles = acc[name] || [];
    acc[name] = [...oldTitles, task.title];
    return acc;
  }, {});
};

export const indexById = (tasks) => {
  return tasks.reduce((acc, task) => {
    const id = task.id;
    acc[id] = task;
    return acc;
  }, {});
};
