import React from "react";
import { Route, Switch } from "react-router-dom";
import RequireLogin from "../layout/RequireLogin";
import Tutorials from "../tutorials/Tutorials";
import Jobs from "../jobs/Jobs";
import Account from '../account/Account';
import PrivateRoute from '../routing/PrivateRoute';
import ProfileList from '../profiles/ProfileList';
import Footer from '../layout/Footer'
import NotFound from '../layout/NotFound'

const Routes = (props) => {
	return (
		<section className="container-box">
			<Switch>
				<Route exact path="/community" component={ProfileList} />
				<Route exact path="/tutorials" component={Tutorials} />
				<Route exact path="/login-alert" component={RequireLogin} />
				<PrivateRoute exact path="/jobs" component={Jobs} />
				<PrivateRoute exact path="/account" component={Account} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</section>
	);
};

export default Routes;
