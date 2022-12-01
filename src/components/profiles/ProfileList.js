import React, {Fragment, useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import {getAllProfiles} from '../../actions/profile'
import ProfileItem from './ProfileItem';
import SearchBar from './SearchBar';
import 'tachyons';

const ProfileList = ({getAllProfiles, profile: { profiles, loading}}) => {
	// Define the search term state
	const [searchTerm, setSearchTerm] = useState('')
	// Fetch all profiles from DB when componont mounts
	useEffect(() => {
		getAllProfiles()
	}, [getAllProfiles])

	// Update searchTerm state when user start typing
	const onSearchChange = (event) => {
	  setSearchTerm(event.target.value);
	};

	// Generate filtered profiles with accordance to searchTerm that user types
	const filteredProfiles = profiles.filter((profile) =>
	  profile.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Fragment>
		  {loading ? (
		    <Spinner />
		  ) : (
		    <Fragment>
		      <h1><i className="fas fa-users" /> The Community</h1>
		      <h4>View our hunters</h4>
		      <SearchBar searchChange={onSearchChange} />
		      <div style={{ overflow: 'scroll', border: '5px solid black', height: '600px'}}>
		        {filteredProfiles.length > 0 ? (
		          filteredProfiles.map(profile => (
		            <ProfileItem key={profile._id} profile={profile} />
		          ))
		        ) : (
		          <h4>No profiles found...</h4>
		        )}
		      </div>
		    </Fragment>
		  )}
		</Fragment>
	)
}

const mapStateToProps = (state) => ({
	profile: state.profile
})

export default connect(mapStateToProps,{ getAllProfiles })(ProfileList);
