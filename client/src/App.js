import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Ganzolboo from './components/ganzolboo/ganzolboo';
import Hansol from './components/hansol/hansol';
import Minho from './components/minho/minho';
import EditTodo from "./components/minho/edit-todo.component";
import TodosList from "./components/minho/todos-list.component";
import Vinicius from './components/vinicius/vinicius';
import PlaceOrder from "./components/ganzolboo/PlaceOrder";
import UpdatePredicted from "./components/ganzolboo/UpdatePredicted";
import Kitchen from "./components/ganzolboo/Kitchen.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        
          <header className="App-header">

          
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>CSC-667 Homework 3</h1>
            </div>


            <div id="menu">
              <Link to="/">Home</Link>
              <Link to="/ganzolboo">Ganzolboo</Link>
              <Link to="/hansol">Hansol</Link>
              <Link to="/minho">Minho</Link>
              <Link to="/vinicius">Vinicius</Link>
            </div>
            
          </header>
           

          <Route path="/" exact component={Home} />
          <Route path="/ganzolboo" exact component={Ganzolboo} />
          <Route path="/hansol" exact component={Hansol} />
          <Route path="/minho" exact component={Minho} />
          <Route path="/minho/todoslist" exact component={TodosList} />
          <Route path="/minho/edit" component={EditTodo} />
          <Route path="/vinicius" exact component={Vinicius} />
          <Route exact path="/" component={PlaceOrder} />
          <Route path="/updatepredicted" component={UpdatePredicted} />  
          <Route path="/kitchen" component={Kitchen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
