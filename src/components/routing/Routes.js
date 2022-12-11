import React from "react";
import { Route, Switch } from "react-router-dom";
import Tutorials from "../tutorials/Tutorials";
import Jobs from "../jobs/Jobs";
import Account from "../account/Account";
import PrivateRoute from "../routing/PrivateRoute";
import ProfileList from "../profiles/ProfileList";
import Footer from "../layout/Footer";
import NotFound from "../layout/NotFound";
import RegisterScreen from "../register/RegisterScreen";
import LoginScreen from "../login/LoginScreen";

const Routes = (props) => {
  return (
    <section className="container-box">
      <Switch>
        <Route exact path="/community" component={ProfileList} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/signin" component={LoginScreen} />
        <PrivateRoute exact path="/jobs" component={Jobs} />
        <PrivateRoute exact path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </section>
  );
};

export default Routes;
