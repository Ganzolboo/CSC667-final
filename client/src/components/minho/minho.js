/*
In order to start this app,

STEP 1 : 
    Change into that folder by using:
    $ cd backend

    With the package.json file available in the project folder we’re ready to add some dependencies to the project:
    $ npm install express body-parser cors mongoose

    $ npm install -g nodemon

    $ nodemon server or $ npx nodemon server

STEP 2 :
    First of all we need to make sure that MongoDB is installed on your system. On MacOS this task can be completed by using the following command:
    $ brew install mongodb

    Having installed MongoDB on your system you need to create a data directory which is used by MongoDB:
    $ mkdir -p /data/db

    Now we’re ready to start up MongoDB by executing the following command:
    $ mongod  or $ brew services (re)start mongodb

STEP 3:
    Make sure you install everything before run the app
    $ npm install

    Start the development web server by running the following command:
    $ npm start

*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "../minho/create-todo.component";
import EditTodo from "../minho/edit-todo.component";
import TodosList from "../minho/todos-list.component";

class Minho extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default Minho;