import React, { useState } from "react";
import {connect} from 'react-redux'
import {AddProfile} from '../../actions/profile'
import M from "materialize-css/dist/js/materialize.min.js";

const AddProfileModal = ({AddProfile}) => {
	const [formFields, setFormFields] = useState({
		name: "",
		company: "",
		position: "",
		university: "",
		contact: "",
	});

	const { name, company, position, university, contact } = formFields;

	const onChange = (e) =>
		setFormFields({ ...formFields, [e.target.name]: e.target.value });	

	const onSubmit = (e) => {
		if ((name === "") || (company === "") || (position === "") || 
			(university === "") || (contact === "")) {
			M.toast({ html: "Please fill out all fields!" });
		} else {
			const newProfile = {
				name,
				company,
				position,
				university,
				contact
			}
			AddProfile(newProfile)

			// Clear Fields
			setFormFields({
				name: "",
				company: "",
				position: "",
				university: "",
				contact: ""
			})
		}		
	}

	return (
		<div id="add-profile-modal" className="modal" style={{width: "75%", height: "75%"}}>
			<div className="modal-content">
				<h4>Add Profile</h4>
				<div className="row">
					<div className="input-field col s6">
						<input
							type="text"
							name="name"
							value={name}
							onChange={onChange}
						/>
						<label htmlFor="name" className="active">
							Full Name
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
							name="position"
							value={position}
							onChange={onChange}
						/>
						<label htmlFor="position" className="active">
							Position
						</label>
					</div>
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
				</div>							
				<div className="row">
					<div className="input-field col s6">
						<input
							type="text"
							name="contact"
							value={contact}
							onChange={onChange}
						/>
						<label htmlFor="contact" className="active">
							Contact Email
						</label>
					</div>
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

export default connect(null, { AddProfile })(AddProfileModal)