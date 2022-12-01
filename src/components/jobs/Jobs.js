import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import JobItem from "./JobItem";
import { getJobs } from "../../actions/job";
import Spinner from "../layout/Spinner";
import AddJobBtn from './AddJobBtn'
import AddJobModal from './AddJobModal'

const Jobs = ({ job: { jobs, loading }, profile: {profile}, getJobs }) => {
	// Fetching jobs from DB
	useEffect(() => {
		getJobs();
	}, [getJobs]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<Fragment>
		{profile !== null ? (
				<ul className="collection with-header">
					<li className="collection-header center">
						<h2>Careers and Occupations</h2>
						<AddJobBtn />
						<AddJobModal />
					</li>
					{!loading && jobs.length === 0 ? (
						<p className="center">No Avaiable Jobs!</p>
					) : (
						jobs.map((job) => <JobItem job={job} key={job._id} />)
					)}
				</ul>
			) : (
				<Redirect to="/account" />
			)}
		</Fragment>
	)

};

const mapStateToProps = (state) => ({
	job: state.job,
	profile: state.profile
});

export default connect(mapStateToProps, { getJobs })(Jobs);
