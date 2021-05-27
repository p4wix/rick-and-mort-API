import React from "react";
import ProfileRow from "./ProfileRow/ProfileRow";

const CharacterCard = ({ name, image, species, gender, status, location }) => {
	return (
		<div className="character-card-wrapper">
			<div className="character-card">
				<ProfileRow
					status={status}
					name={name}
					image={image}
					species={species}
					gender={gender}
					location={location}
				/>
			</div>
		</div>
	);
};

export default CharacterCard;
