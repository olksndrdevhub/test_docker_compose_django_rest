import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UsersList from "./components/users-list.component";
import GroupsList from "./components/groups-list.component";
import {EditGroup, EditUser} from "./components/edit.component";
import {AddUser, AddGroup} from "./components/add.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            UserGroupCRUD
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/groups"} className="nav-link">
                Groups
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={UsersList} />
            <Route exact path={["/groups"]} component={GroupsList} />
            <Route exact path={["/edit/group/:id"]} component={EditGroup} />
            <Route exact path={["/edit/user/:id"]} component={EditUser} />
            <Route exact path={["/add/user/"]} component={AddUser} />
            <Route exact path={["/add/group/"]} component={AddGroup} />



          </Switch>
        </div>
      </div>
    );
  }
}

export default App;