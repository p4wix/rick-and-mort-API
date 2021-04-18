import React from "react";

const API_URL = "https://rickandmortyapi.com/api/character";
const UNNKNOWN_AVATAR_URL = `${process.env.PUBLIC_URL}/images/unknown-avatar.png`;

class RickAndMortyCharactersCards extends React.Component {
	state = {
		characters: []
	};

	componentDidMount() {
		fetch(API_URL)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw Error("Error");
				}
			})
			.then(result => {
				console.log(result);
				this.setState({
					characters: result.results
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	renderCards = () => {
		return this.state.characters.map(
			({ id, name, species, image, gender }) => (
				<div className="id-card-wrapper" key={id}>
					<div className="id-card">
						<div className="profile-row">
							<div className="profile-row__avatar">
								<img
									className="avatar__image"
									src={image}
									alt={`${name}'s avatar`}
								/>
							</div>
							<div className="profile-row__desc">
								<h1 className="desc__name">{name}</h1>
								<p>Species: {species}</p>
								<p>Gender: {gender}</p>
							</div>
						</div>
					</div>
				</div>
			)
		);
	};

	render() {
		return this.renderCards();
	}
}

export default RickAndMortyCharactersCards;
