import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./Spinner";

const Landing = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo } = userLogin;

  if (loading) {
    return <Spinner />;
  }

  if (userInfo) {
    return <Redirect to="/jobs" />;
  }

  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="font-xl">Job Hunter</h1>
        <p className="font-large">
          Find and post open jobs, connect with people and learn new skills with
          Job Hunter.
        </p>
      </div>
    </section>
  );
};

export default Landing;
