import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addJob } from "../../actions/job";
import { useDispatch } from "react-redux";

const AddJobModal = () => {
  const [formFields, setFormFields] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    industry: "",
    contact_email: "",
    employment: "",
  });

  const dispatch = useDispatch();

  const {
    title,
    company,
    location,
    description,
    industry,
    contact_email,
    employment,
  } = formFields;

  const onChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    if (
      title === "" ||
      company === "" ||
      location === "" ||
      description === "" ||
      industry === "" ||
      contact_email === "" ||
      employment === ""
    ) {
      M.toast({ html: "Please fill out all fields!" });
    } else {
      const newJob = {
        title,
        company,
        location,
        description,
        industry,
        contact_email,
        employment,
      };
      dispatch(addJob(newJob));

      // Clear Fields
      setFormFields({
        title: "",
        company: "",
        location: "",
        description: "",
        industry: "",
        contact_email: "",
        employment: "",
      });
    }
  };

  return (
    <div id="add-job-modal" className="modal">
      <div className="modal-content">
        <form onSubmit={onSubmit}>
          <h4>Post a new Job</h4>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="title"
                value={title}
                onChange={onChange}
              />
              <label htmlFor="title" className="active">
                Job Title
              </label>
            </div>
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
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="location"
                value={location}
                onChange={onChange}
              />
              <label htmlFor="location" className="active">
                Job Location
              </label>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="industry"
                value={industry}
                onChange={onChange}
              />
              <label htmlFor="industry" className="active">
                Industry
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="email"
                name="contact_email"
                value={contact_email}
                onChange={onChange}
              />
              <label htmlFor="contact_email" className="active">
                Contact Email (valid email is required)
              </label>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="employment"
                value={employment}
                onChange={onChange}
              />
              <label htmlFor="employment" className="active">
                Employment (Full Time/Part Time)
              </label>
            </div>
          </div>
          <div className="row">
            <textarea
              name="description"
              value={description}
              onChange={onChange}
              placeholder="Add Job Description"
              style={{ padding: "8px" }}
            />
          </div>
          <div className="row">
            <div className="input-field col s1 push-s5">
              <button
                type="submit"
                onClick={onSubmit}
                className="modal-close btn waves-effect blue waves-light "
                disabled={
                  title === "" ||
                  company === "" ||
                  location === "" ||
                  description === "" ||
                  industry === "" ||
                  contact_email === "" ||
                  employment === "" ||
                  //   The below check if contact field has an email pattern
                  !contact_email
                    .toLowerCase()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
                }
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobModal;
