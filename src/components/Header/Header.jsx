import React from "react";

const Header = ({ counter, setCounter }) => {
	const handleCounterNext = () => {
		if (counter < 38) {
			setCounter(counter + 1);
		}
	};

	const handleCounterPrev = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	return (
		<div className="header-wrap">
			<button className="header-wrap__button" onClick={handleCounterPrev}>
				Load prev 10
			</button>
			<h1 className="header-wrap__title">Rick and Morty cards</h1>
			<button className="header-wrap__button" onClick={handleCounterNext}>
				Load next 10
			</button>
		</div>
	);
};

export default Header;
