export const addnewtodo = (input) => ({
  type: "addnewtodo",
  payload: {
    id: Math.random(),
    description: input,
    isDone: false,
  },
});

export const checktask = (id) => ({
  type: "checktask",
  payload: id,
});
export const deleteTask = (id) => ({
  type: "deleteTask",
  payload: id,
});
