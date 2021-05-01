/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/mainlayout";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import Todo from "./Todo";

import * as uuid from "uuid";

const ContentHeader = () => {
  return (
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1 className="m-0">Todo List Example</h1>
      </div>

      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="fas fa-tachometer-alt"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active">Todo List</li>
        </ol>
      </div>
    </div>
  );
};

const Content: React.FunctionComponent = () => {
  const [todos, setState] = useState<Todo[]>([]);

  const todoRef = useRef<TodoInput>(null);

  function test() {
    if (todoRef.current) {
      todoRef.current.setFocusInput();
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Simple Todo List</h3>
        <div className="card-tools"></div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col mb-3">
            <TodoInput
              ref={todoRef}
              addTodo={(name) => {
                // Swal.fire("Oops...", "Task name cannot be empty!", "error").then(() => {});

                setState(
                  [
                    {
                      id: uuid.v4(),
                      name: name,
                      done: false,
                    },
                  ].concat(todos)
                );
              }}
            ></TodoInput>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TodoItems
              todos={todos}
              onDelete={(id) => {
                test();

                let newTodos = todos.filter((todo) => {
                  return todo.id !== id;
                });
                setState(newTodos);
              }}
              onFinish={(id) => {
                test();

                let newTodos = todos.map((todo) => {
                  if (todo.id === id) {
                    todo.done = true;
                  }
                  return todo;
                });
                setState(newTodos);
              }}
            ></TodoItems>
          </div>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default function TodoList() {
  return (
    <MainLayout {...{ contentHeader: <ContentHeader></ContentHeader> }}>
      <Content></Content>
    </MainLayout>
  );
}
