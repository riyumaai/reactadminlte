import React from "react";
import Todo from "../Todo";
import TodoItem from "./TodoItem";

const TodoItems: React.FunctionComponent<{ todos: Todo[]; onDelete: (id: string) => void; onFinish: (id: string) => void }> = (
  props: React.PropsWithChildren<{ todos: Todo[]; onDelete: (id: string) => void; onFinish: (id: string) => void }>
) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={(id: string) => {
              props.onDelete(id);
            }}
            onFinish={(id: string) => {
              props.onFinish(id);
            }}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default TodoItems;
