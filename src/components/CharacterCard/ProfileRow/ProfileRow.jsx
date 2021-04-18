import React from "react";
import Avatar from "./Avatar";
import Description from "./Description";

const ProfileRow = ({ name, image, species, gender }) => {
	return (
		<div className="profile-row">
			<Avatar image={image} name={name} />
			<Description name={name} species={species} gender={gender} />
		</div>
	);
};

export default ProfileRow;
