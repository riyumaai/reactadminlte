import React from "react";
import Todo from "../Todo";

const TodoItem: React.FunctionComponent<{ todo: Todo; onDelete: (id: string) => void; onFinish: (id: string) => void }> = (
  props: React.PropsWithChildren<{ todo: Todo; onDelete: (id: string) => void; onFinish: (id: string) => void }>
) => {
  let button = (
    <span>
      <span className="badge badge-info">Finished</span>
    </span>
  );
  if (props.todo.done === false) {
    button = (
      <span>
        <button
          className="badge btn btn-outline-primary mr-2"
          onClick={() => {
            props.onFinish(props.todo.id);
          }}
        >
          Finish
        </button>
        <button
          className="badge btn btn-outline-danger"
          onClick={() => {
            props.onDelete(props.todo.id);
          }}
        >
          Delete
        </button>
      </span>
    );
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.todo.name}
      {button}
    </li>
  );
};

export default TodoItem;
