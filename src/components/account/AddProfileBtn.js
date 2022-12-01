import React from 'react'

const AddProfileBtn = () => {
	  return (
	      <a
	      	style={{marginTop:'50px'}}
	        href='#add-profile-modal'
	        className='waves-effect waves-light blue btn modal-trigger'
	      ><i className="fas fa-user-plus" /> Add Profile</a>
	  );
	};

export default AddProfileBtn