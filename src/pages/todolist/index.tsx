/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/mainlayout";

const a = React.forwardRef(() => {
  return <a>test</a>;
});

const ContentHeader = () => {
  return (
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1 className="m-0">TODO</h1>
      </div>

      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="fas fa-tachometer-alt"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active">TODO List</li>
        </ol>
      </div>
    </div>
  );
};

const Content = () => {
  return <div className="row"></div>;
};

export default function TodoList() {
  return (
    <MainLayout {...{ contentHeader: <ContentHeader></ContentHeader> }}>
      <Content></Content>
    </MainLayout>
  );
}
