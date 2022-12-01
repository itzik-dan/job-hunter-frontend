import React, {Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from  'materialize-css/dist/js/materialize.min.js';

const Navbar = ({ auth }) => {
	// Material CSS configuration for displaying side navbar on mobile devices
	useEffect(() => {
		let elems = document.querySelectorAll('.sidenav');
		M.Sidenav.init(elems);
	})
	// Callback function for rendering Navbar links for logged in user and logged out users
	const renderContent = () => {
		switch (auth.user) {
			case null:
				return;
			case false:
				return [
					<li key="1">
						<Link to="/community">Community</Link>
					</li>,						
					<li key="2">
						<Link to="/tutorials">Tutorials</Link>
					</li>,					
					<li key="3">
						<a href="/auth/google">Login With Google</a>
					</li>
				];
			default:
				return [
					<li key="1">
						<Link to="/jobs"><i className="fas fa-briefcase" style={{fontSize: '15px'}}
						 /> Jobs</Link>
					</li>,						
					<li key="2">
						<Link to="/community">Community</Link>
					</li>,					
					<li key="3">
						<Link to="/tutorials">Tutorials</Link>
					</li>,					
					<li key="4">
						<Link to="/account">Account</Link>
					</li>,
					<li key="5">
						<a href="/api/logout"><i className="fas fa-sign-out-alt" 
						style={{fontSize: '15px'}} /> Logout</a>
					</li>,
				];
		}
	};

	return (
		<Fragment>
			<nav className="position black">
				<div className="nav-wrapper">
					<Link to={auth.user ? '/jobs' : '/'} className="brand-logo">
						<i className="fas fa-running" />
						Job Hunter
					</Link>
					<a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{renderContent()}
					</ul>
				</div>
			</nav>
			<ul className="sidenav" id="mobile-demo">
				{renderContent()}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Navbar);
