const BASE_URL = "https://jsonplaceholder.typicode.com";

const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const getTodos = async (limit) => request(`${BASE_URL}/todos?_limit=${limit}`);

const getTodo = async (id) => request(`${BASE_URL}/todos/${id}`);

const getUser = async (id) => request(`${BASE_URL}/users/${id}`);

const getUserTodos = async (userId) => {
  return request(`${BASE_URL}/todos?userId=${userId}`);
};

const getUserStats = async (userId) => {
  const todos = await getUserTodos(userId);

  const total = todos.length;
  const completed = todos.filter((task) => task.completed).length;
  const active = total - completed;
  return { total, completed, active };
};

const createTodo = async (title) => {
  return request(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false, userId: 1 }),
  });
};

const getUserWithTodos = async (userId) => {
  const [users, tasks] = await Promise.all([
    getUser(userId),
    getUserTodos(userId),
  ]);
  return { name: users.name, todosCount: tasks.length };
};

const main = async () => {
  try {
    const answ = await getUserStats(1);
    console.log(answ);
  } catch (error) {
    console.log("Error:", error.message, error.cause ?? "");
  }
};

main();
