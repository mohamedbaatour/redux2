import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTask, deleteTask } from "../action/action";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const tasks = useSelector((state) => state.reducer.tasks);
  const task = useSelector((state) => state.reducer.task);
  const removeTask = () => {
    dispatch(deleteTask(task.id));
  };
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Button onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
          <p>{task.id}</p>
          <p>{task.description}</p>
          <Button onClick={() => dispatch(checkTask(task.id))}>Check</Button>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
