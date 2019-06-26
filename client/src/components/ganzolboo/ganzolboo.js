import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Kitchen from "../ganzolboo/Kitchen";
import PlaceOrder from "../ganzolboo/PlaceOrder";
import UpdatePredicted from "../ganzolboo/UpdatePredicted";

class Ganzolboo extends Component {

  render() {
    return (
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={PlaceOrder} />
              <Route path="/updatepredicted" component={UpdatePredicted} />  
              <Route path="/kitchen" component={Kitchen} />
            </Switch>
          </div>
    );
  }
}

export default Ganzolboo;
