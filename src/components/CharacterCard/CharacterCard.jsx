import React from "react";
import ProfileRow from "./ProfileRow/ProfileRow";

const CharacterCard = ({ name, image, species, gender }) => {
	return (
		<div className="character-card-wrapper">
			<div className="character-card">
				<ProfileRow
					name={name}
					image={image}
					species={species}
					gender={gender}
				/>
			</div>
		</div>
	);
};

export default CharacterCard;
