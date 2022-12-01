import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import { fetchUser } from './actions/auth'
import { getCurrentProfile } from './actions/profile'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

const App = ({fetchUser, getCurrentProfile}) => {
  // Defining lifecycle hook for fetching logged in user and profile when the app is rednered
  useEffect(() => {
    fetchUser()
    getCurrentProfile()
  }, [fetchUser, getCurrentProfile]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />  
        </Switch>
      </Fragment>
    </Router>
  );
};

export default connect(null, { fetchUser, getCurrentProfile })(App);
