import React, { useState, useEffect } from "react";
import CharactersCards from "../components/CharactersCards";
import Header from "../components/Header/Header";

const API_URL = "https://rickandmortyapi.com/api/character?page=1";

const RickAndMortyCharactersCards = () => {
	const [characters, setCharacters] = useState([]);
	const [counter, setCounter] = useState(1);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?page=${counter}`)
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data.results);
			});
	}, [counter]); //tutaj dać conuntera

	return (
		<>
			<Header counter={counter} setCounter={setCounter} />
			<CharactersCards characters={characters} />
			{console.log(counter)}
		</>
	);
};

export default RickAndMortyCharactersCards;
