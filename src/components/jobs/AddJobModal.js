import React, { useState } from "react";
import {connect} from 'react-redux'
import {addJob} from '../../actions/job'
import M from "materialize-css/dist/js/materialize.min.js";

const AddJobModal = ({addJob}) => {
	const [formFields, setFormFields] = useState({
		title: "",
		company: "",
		location: "",
		description: "",
		industry: "",
		contact_email: "",
		employment: ""
	});

	const { title, company, location, description, industry, contact_email, employment} = formFields;

	const onChange = (e) =>
		setFormFields({ ...formFields, [e.target.name]: e.target.value });	

	const onSubmit = (e) => {
		if ((title === "") || (company === "") || (location === "") || 
			(description === "") || (industry === "") || (contact_email === "") || (employment === "")) {
			M.toast({ html: "Please fill out all fields!" });
		} else {
			const newJob = {
				title,
				company,
				location,
				description,
				industry,
				contact_email,
				employment
			}
			addJob(newJob)

			// Clear Fields
			setFormFields({
				title: "",
				company: "",
				location: "",
				description: "",
				industry: "",
				contact_email: "",
				employment: ""
			})
		}		
	}

	return (
		<div id="add-job-modal" className="modal">
			<div className="modal-content">
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
							type="text"
							name="contact_email"
							value={contact_email}
							onChange={onChange}
						/>
						<label htmlFor="contact_email" className="active">
							Contact Email
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
						  placeholder='Add Job Description'
						/>
				</div>				
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue waves-light btn"
				>
					Add
				</a>
			</div>
		</div>
	)
}

export default connect(null, { addJob })(AddJobModal)