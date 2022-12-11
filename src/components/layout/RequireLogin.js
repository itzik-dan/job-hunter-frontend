import React from "react";
import { Link } from "react-router-dom";

const RequireLogin = () => {
  // The functional component is will pop up when logged out user tries to enter auth links
  return (
    <div className="row" style={{ marginTop: "200px" }}>
      <div className="col s12">
        <div className="card blue-grey darken-4">
          <div className="card-content white-text">
            <span className="card-title">
              <h1>Oops... Login Required!</h1>
            </span>
            <h5>
              This operation requires you to be logged in, please proceed to the
              link below and sign in with Google.
            </h5>
          </div>
          <div className="card-action">
            <h5>
              <Link to="/signin">Login</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequireLogin;
