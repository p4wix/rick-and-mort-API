import React from "react";

const Avatar = ({ image, name }) => {
	return (
		<div className="profile-row__avatar">
			<img className="avatar__image" src={image} alt={`${name}'s avatar`} />
		</div>
	);
};

export default Avatar;
