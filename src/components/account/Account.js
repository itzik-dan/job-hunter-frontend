import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import AddProfileBtn from "./AddProfileBtn";
import EditProfileBtn from "./EditProfileBtn";
import AddProfileModal from './AddProfileModal';
import EditProfileModal from './EditProfileModal';
import Spinner from '../layout/Spinner'
import M from "materialize-css/dist/js/materialize.min.js";
import {deleteProfile} from '../../actions/profile'

const Account = ({ auth: { user }, profile: { profile, loading}, deleteProfile}) => {
	useEffect(() => {
	  // Init Materialize JS
	  M.AutoInit();
	});


	return loading ? (<Spinner />) : (
		<Fragment>
			<h1>Account Page</h1>
			{profile !== null ? (
        <Fragment>
          <h4 style={{marginTop:'50px', marginBottom:'50px'}}>
            <i className="fas fa-user" /> Welcome {profile.name}
          </h4>
          <EditProfileBtn />
          <EditProfileModal />
          <Link to={'/jobs'}>
              <button className="waves-effect waves-light btn blue" style={{marginLeft:'20px'}}>
                <i className="fas fa-arrow-left" />{' '}Back to job list
              </button>
          </Link>
          <div  style={{marginTop:'50px'}}>
	          <button onClick={deleteProfile} className="waves-effect waves-light btn red">
	            <i className="fas fa-user-times" />{' '}Delete Profile
	          </button>
          </div>
        </Fragment>
    	  ) : (
        <Fragment>
          <i className="fas fa-exclamation-circle" style={{fontSize: '100px'}} />
          <h4>No Profile! Please create a profile in order to view and post jobs</h4>
          <AddProfileBtn />
          <AddProfileModal />
        </Fragment>
      )}
		</Fragment>
	);
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {deleteProfile})(Account);
