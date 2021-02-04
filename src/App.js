import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={SignIndex} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
