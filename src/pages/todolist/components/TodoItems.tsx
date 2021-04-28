import React from "react";
import Todo from "../Todo";
import TodoItem from "./TodoItem";

const TodoItems: React.FunctionComponent<{ todos: Todo[] }> = (props: React.PropsWithChildren<{ todos: Todo[] }>) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo}></TodoItem>;
      })}
    </ul>
  );
};

export default TodoItems;
