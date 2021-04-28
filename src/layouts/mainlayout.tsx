/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export interface MainLayoutProps {
  contentHeader: ReactNode;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props: React.PropsWithChildren<MainLayoutProps>) => {
  return (
    <>
      <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
      </div>

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-power-off text-danger" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
        </ul>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: "0.8" }} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/todolist" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>TODO List</p>
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
             */}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">{props.contentHeader}</div>
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">{props.children}</section>
        {/* /.content */}
      </div>

      <footer className="main-footer">
        <strong>
          Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
