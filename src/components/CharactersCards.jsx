import React from "react";
import CharacterCard from "./CharacterCard/CharacterCard";

const UNNKNOWN_AVATAR_URL = `${process.env.PUBLIC_URL}/images/unknown-avatar.png`;

const CharactersCards = ({ characters }) => {
	return characters.map(
		({ id, name, species, image = UNNKNOWN_AVATAR_URL, gender }) => (
			<CharacterCard
				key={id}
				name={name}
				species={species}
				image={image}
				gender={gender}
			/>
		)
	);
};

export default CharactersCards;
