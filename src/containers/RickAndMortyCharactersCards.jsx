import React from "react";
import CharactersCards from "../components/CharactersCards";

const API_URL = "https://rickandmortyapi.com/api/character";

class RickAndMortyCharactersCards extends React.Component {
	state = {
		characters: [],
	};

	componentDidMount() {
		fetch(API_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw Error("Error");
				}
			})
			.then((result) => {
				console.log(result);
				this.setState({
					characters: result.results,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return <CharactersCards characters={this.state.characters} />;
	}
}

export default RickAndMortyCharactersCards;
