import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import {AddProfile} from '../../actions/profile'
import M from "materialize-css/dist/js/materialize.min.js";

const EditProfileModal = ({profile: {profile}, AddProfile}) => {
	const [formFields, setFormFields] = useState({
		name: "",
		company: "",
		position: "",
		university: "",
		contact: "",
	});

	const { name, company, position, university, contact } = formFields;
	// Fetching current profile info from redux state in order to present it in the edit form
	useEffect(() => {
		if (profile) {
			setFormFields({
				name: profile.name,
				company: profile.company,
				position: profile.position,
				university: profile.university,
				contact: profile.contact
			})
		}
	}, [profile])


	const onChange = (e) =>
		setFormFields({ ...formFields, [e.target.name]: e.target.value });	

	const onSubmit = (e) => {
		if ((name === "") || (company === "") || (position === "") || 
			(university === "") || (contact === "")) {
			M.toast({ html: "Please fill out all fields!" });
		} else {
			const updatedProfile = {
				name,
				company,
				position,
				university,
				contact
			}
			AddProfile(updatedProfile)
		
		}		
	}

	return (
		<div id="edit-profile-modal" className="modal" style={{width: "75%", height: "75%"}}>
			<div className="modal-content">
				<h4>Edit Profile</h4>
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
					Update
				</a>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	profile: state.profile
})

export default connect(mapStateToProps, {AddProfile})(EditProfileModal);