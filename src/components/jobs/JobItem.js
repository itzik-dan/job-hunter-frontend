import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import { deleteJob } from "../../actions/job";

const JobItem = ({ job }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  //   Get user info
  const { userInfo } = userLogin;

  // Delete single jobs post
  const onDelete = () => {
    if (window.confirm("Delete?")) {
      dispatch(deleteJob(job._id));
    }
  };
  return (
    <li className="collection-item">
      <div>
        <span className="title">
          <Avatar name={job.author} size="60" round={true} /> {job.author}
          <span className="secondary-content">
            {job.industry}, {job.employment}
          </span>
        </span>
        <br />
        {job.user === userInfo._id && (
          <div style={{ cursor: "pointer" }}>
            <i
              onClick={onDelete}
              className="material-icons red-text secondary-content"
            >
              delete
            </i>
          </div>
        )}
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
        </span>
      </div>
    </li>
  );
};

export default JobItem;
