import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Images from "./Pages/Images";
import NotFound from "./Pages/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Nav/>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/images"
            component={Images}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;
