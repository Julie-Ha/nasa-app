import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pictures from "./Pages/Pictures";
import NotFound from "./Pages/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Nav/>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            component={Home}
          />
          <Route
            path={process.env.PUBLIC_URL + "/pictures"}
            component={Pictures}
          />
          <Route
            path={process.env.PUBLIC_URL + "/about"}
            component={About}
          />
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;
