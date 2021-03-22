const Add_Todo = "Add_Todo";
export const addTodo = (message) => ({
  type: Add_Todo,
  message,
  id: Math.random(),
});

const Remove_Todo = "Remove_Todo";

export const removeTodo = (id) => {
  return {
    type: Remove_Todo,
    id,
  };
};
