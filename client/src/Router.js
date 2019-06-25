import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import NotFound from "./components/pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
