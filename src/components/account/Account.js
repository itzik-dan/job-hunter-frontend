import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfileBtn from "./EditProfileBtn";
import EditProfileModal from "./EditProfileModal";
import Spinner from "../layout/Spinner";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteProfile } from "../../actions/profile";

const Account = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  //   Get user info
  const { userInfo } = userLogin;

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <h1>Account Page</h1>
      <h4 style={{ marginTop: "50px", marginBottom: "50px" }}>
        <i className="fas fa-user" /> Welcome {userInfo.name}
      </h4>
      <EditProfileBtn />
      <EditProfileModal />
      <Link to={"/jobs"}>
        <button
          className="waves-effect waves-light btn blue"
          style={{ marginLeft: "20px" }}
        >
          <i className="fas fa-arrow-left" /> Back to job list
        </button>
      </Link>
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => dispatch(deleteProfile())}
          className="waves-effect waves-light btn red"
        >
          <i className="fas fa-user-times" /> Delete Profile
        </button>
      </div>
    </Fragment>
  );
};

export default Account;
