import React, {useEffect} from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
const AddJobBtn = () => {
	useEffect(() => {
	  // Init Materialize JS
	  M.AutoInit();
	});
	  return (
	      <a
	      	style={{marginTop:'10px'}}
	        href='#add-job-modal'
	        className='waves-effect waves-light blue btn modal-trigger'
	      ><i className="fas fa-plus" /> Add</a>
	  );
	};

export default AddJobBtn