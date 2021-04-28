/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/mainlayout";
import TodoItems from "./components/TodoItems";
import Todo from "./Todo";

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
  const todoItems: Todo[] = [];
  todoItems.push(
    {
      name: "Fist todo",
      done: false,
    },
    {
      name: "Second todo",
      done: false,
    }
  );
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Simple Todo List</h3>
        <div className="card-tools"></div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col mb-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Please input task" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <TodoItems todos={todoItems}></TodoItems>
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
