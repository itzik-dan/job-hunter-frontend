import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { editProfile } from "../../actions/profile";

const EditProfileModal = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    password: "",
    company: "",
    position: "",
    university: "",
    contact: "",
  });

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  //   Get user info
  const { userInfo } = userLogin;

  const { name, password, company, position, university, contact } = formFields;
  // Fetching current profile info from redux state in order to present it in the edit form
  useEffect(() => {
    if (userInfo) {
      setFormFields({
        name: userInfo.name,
        password: "",
        company: userInfo.company,
        position: userInfo.position,
        university: userInfo.university,
        contact: userInfo.contact,
      });
    }
  }, [userInfo]);

  const onChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
	
    let updatedProfile;

    if (
      name === "" ||
      company === "" ||
      position === "" ||
      university === "" ||
      contact === ""
    ) {
      M.toast({ html: "All fields apart from password is required!" });
    } else {
      if (password === "") {
        updatedProfile = {
          name,
          company,
          position,
          university,
          contact,
        };
      } else {
        updatedProfile = {
          name,
          password,
          company,
          position,
          university,
          contact,
        };
      }
      dispatch(editProfile(updatedProfile));
    }
  };

  return (
    <div
      id="edit-profile-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <form onSubmit={onSubmit}>
          <h4>Edit Profile</h4>
          <div className="row">
            <div className="input-field col s6">
              <input type="text" name="name" value={name} onChange={onChange} />
              <label htmlFor="name" className="active">
                Full Name
              </label>
            </div>
            <div className="input-field col s6">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label htmlFor="password" className="">
                Password
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="company"
                value={company}
                onChange={onChange}
              />
              <label htmlFor="company" className="active">
                Company
              </label>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="position"
                value={position}
                onChange={onChange}
              />
              <label htmlFor="position" className="active">
                Position
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="university"
                value={university}
                onChange={onChange}
              />
              <label htmlFor="university" className="active">
                Educational Institution
              </label>
            </div>
            <div className="input-field col s6">
              <input
                type="email"
                name="contact"
                value={contact}
                onChange={onChange}
              />
              <label htmlFor="contact" className="active">
                Contact Email
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s1 push-s5">
              <button
                className="modal-close btn waves-effect blue waves-light"
                type="submit"
                name="action"
                disabled={
                  name === "" ||
                  company === "" ||
                  position === "" ||
                  university === "" ||
                  contact === "" ||
                  //   The below check if contact field has an email pattern
                  !contact
                    .toLowerCase()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                }
              >
                Update
                <i className="material-icons right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
