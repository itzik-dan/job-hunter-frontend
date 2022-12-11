import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/auth";
import Spinner from "../layout/Spinner";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [university, setUniversity] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo } = userLogin;

  // If user is authenticated redirect to home page
  useEffect(() => {
    if (userInfo) {
      history.push("/jobs");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // calling resiter action to sigin up user with all the details
      dispatch(
        register(name, email, password, company, position, university, contact)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="name"
                type="text"
                className="validate"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="company"
                type="text"
                className="validate"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <label htmlFor="company">Company</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="password"
                type="password"
                minLength={6}
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="position"
                type="text"
                className="validate"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <label htmlFor="position">Position</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="university"
                type="text"
                className="validate"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              <label htmlFor="university">University</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="contact"
                type="text"
                className="validate"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <label htmlFor="contact">Contact</label>
            </div>
            <div className="input-field col s6 push-s1">
              <button
                className="btn waves-effect blue waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>

        <div className="input-field col s16 push-s7">
          <Link to="/signin">Have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
