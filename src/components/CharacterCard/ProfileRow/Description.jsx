import React from "react";

const Description = ({ name, species, gender }) => {
	return (
		<div className="profile-row__desc">
			<h1 className="desc__name">{name}</h1>
			<p>Species: {species}</p>
			<p>Gender: {gender}</p>
		</div>
	);
};

export default Description;
