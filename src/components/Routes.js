import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import User from "../pages/User";
import Control from "../pages/Control";
import Login from "../pages/signup/Login";
import Register from "../pages/signup/Register";
import Report from "../pages/Report";
import LeftSubMenu from "../pages/leftsubmenu/LeftSubMenu";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/user" component={User} />
      <Route exact path="/control" component={Control} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/leftsubmenu" component={LeftSubMenu} />
    </Switch>
  );
};

export default Routes;
