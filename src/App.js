import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";

function App() {
  return (
    <Switch>
      <Route path="/" component={SignIndex} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/Explore" component={Explore} />
      <Route path="/Notifications" component={Notifications} />
      <Route path="/Messages" component={Notifications} />
      <Route path="/Bookmarks" component={Notifications} />
      <Route path="/Lists" component={Notifications} />
      <Route path="/Profile" component={Notifications} />
    </Switch>
  );
}

export default App;
