import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from './Spinner'

const Landing = ({isLoggedIn, loading}) => {
	if (loading) {
		return <Spinner />
	}
	if (isLoggedIn) {
	  return <Redirect to='/jobs' />;
	}

	return (
		<section className='landing'>
			  <div className='landing-content'>
			    <h1 className='font-xl'>Job Hunter</h1>
			    <p className='font-large'>
			      Find and post open jobs, connect with people and learn new skills with Job Hunter.
			    </p>
			    <p></p>
			    <div>
			      <a href="/auth/google" className='btn btn-primary red'>
			        <i className="fab fa-google" />{' '}Login With Google
			      </a>
			    </div>
			  </div>
		</section>
	)
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Landing);
