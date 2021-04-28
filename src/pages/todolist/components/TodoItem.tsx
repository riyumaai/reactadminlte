import React from "react";
import Todo from "../Todo";

const TodoItem: React.FunctionComponent<{ todo: Todo }> = (props: React.PropsWithChildren<{ todo: Todo }>) => {
  const todo = props.todo;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.name}
      <span>
        <button className="badge btn btn-primary mr-2">Finish</button>
        <button className="badge btn btn-danger">Delete</button>
      </span>
    </li>
  );
};

export default TodoItem;
