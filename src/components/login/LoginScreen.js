import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import Spinner from "../layout/Spinner";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // Fetching logged in user info from redux state
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/jobs");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(login(email, password));

    // Clear state
    setEmail("");
    setPassword("");
  };

  if (loading) return <Spinner />;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6 push-s3">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6 push-s3">
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="input-field col s6 push-s3">
            <button
              className="btn waves-effect blue waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>

        <div className="input-field col s16 push-s7">
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
