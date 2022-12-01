import React, { useState } from "react";

const SearchVid = ({onTermSubmit}) => {
	// Defining the search term state
	const [term, setTerm] = useState("");

	const onInputChange = (event) => {
		setTerm(event.target.value);
	};
	const onFormSubmit = (event) => {
		event.preventDefault()
		onTermSubmit(term)
	}

	return (
		<div>
			<form onSubmit={onFormSubmit} className="col s12">
				<div className="row">
					<div className="input-field col s1">
					<i className="fas fa-search" style={{fontSize: '40px'}} />
					</div>
					<div className="input-field col s11">
						<input
							type="text"
							value={term}
							placeholder="Search tutorials and improve your skills"
							onChange={onInputChange}
						/>
					</div>				
				</div>
			</form>
		</div>
	);
};

export default SearchVid;
