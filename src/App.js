import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={SignIndex} exact />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
