import React from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar';

const ProfileItem = ({profile}) => {
	return (
		<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
			<Avatar name={profile.name} color="black" size="100" round={true} />
			<div>
			<h3>{profile.name}</h3>
			<h6>{profile.position} at {profile.company}</h6>
			<h6>{profile.university}</h6>
			<p>{profile.contact}</p>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user: state.auth.user
})
export default connect(mapStateToProps)(ProfileItem);
