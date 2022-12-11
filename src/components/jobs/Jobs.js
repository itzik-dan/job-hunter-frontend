import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobItem from "./JobItem";
import { getJobs } from "../../actions/job";
import Spinner from "../layout/Spinner";
import AddJobBtn from "./AddJobBtn";
import AddJobModal from "./AddJobModal";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobPosts = useSelector((state) => state.jobPosts);

  const { loading, jobs } = jobPosts;

  // Fetching jobs from DB
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header center">
          <h2>Careers and Occupations</h2>
          <AddJobBtn />
          <AddJobModal />
        </li>
        {!loading && jobs.length === 0 ? (
          <p className="center">No Avaiable Jobs!</p>
        ) : (
          //   <pre>{JSON.stringify(jobs, null, 2)}</pre>
          jobs.map((job) => <JobItem job={job} key={job._id} />)
        )}
      </ul>
    </Fragment>
  );
};

export default Jobs;
