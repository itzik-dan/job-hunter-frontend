import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteJob } from "../../actions/job";
import Avatar from "react-avatar";

const JobItem = ({ auth, job, deleteJob }) => {
	const onDelete = () => {
		if (window.confirm("Delete?")) {
			deleteJob(job._id);
		}
	};
	return (
		<li className="collection-item">
			<div>
				<span
					className="title"
					// onClick={() => setCurrent(log)}
				>
					<Avatar name={job.author} size="60" round={true} />{" "}
					{job.author}
					<span className="secondary-content">
						{job.industry}, {job.employment}
					</span>
				</span>
				<br />
				<span className="title">
					<h5>
						{job.title} at {job.company}
					</h5>
				</span>
				<br />
				<span className="title">{job.description}</span>
				<br />
				<br />
				<span className="title">Location: {job.location}</span>
				<br />
				<span className="title">Contact Info: {job.contact_email}</span>
				<br />
				<span className="grey-text">
					<span className="black-text">Posted on: </span>
					<Moment
						format="MMMM Do YYYY,
					h:mm:ss a"
					>
						{job.date}
					</Moment>
					{!auth.loading && job.user === auth.user._id && (
						<button
							onClick={onDelete}
							className="secondary-content"
						>
							<i className="material-icons grey-text">delete</i>
						</button>
					)}
				</span>
			</div>
		</li>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps, { deleteJob })(JobItem);
