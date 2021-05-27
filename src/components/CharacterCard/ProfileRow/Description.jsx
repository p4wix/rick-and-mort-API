import React from "react";

const setIconColor = (status) => {
	if (status === "Alive") {
		return "green";
	} else if (status === "Dead") {
		return "red";
	} else {
		return "gray";
	}
};

const Description = ({ name, species, gender, status, location }) => {
	return (
		<div className="profile-row__desc">
			<h1 className="desc__name">{name}</h1>
			<p>Gender: {gender}</p>
			<p className="status">
				<span className={`status-icon ${setIconColor(status)}`}></span>{" "}
				{status} {" - "} {species}
			</p>
			<p>Location: {location.name}</p>
		</div>
	);
};

export default Description;
