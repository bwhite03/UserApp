import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Add from "./components/Add";
import Edit from "./components/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
