import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const PokemonCard = ({ selectedPokemonId }) => {
	const [selectedPokemon, setSelectedPokemon] = useState({});
	useEffect(() => {
		axios.get(baseUrl + selectedPokemonId).then((response) => {
			const { data } = response;
			setSelectedPokemon(data);
		});
	}, [selectedPokemonId]);
	const { stats, types, weight, height, sprites } = selectedPokemon;
	console.log(stats, types, weight, height);
	return (
		<div>
			{Object.keys(selectedPokemon).length > 0 && (
				<div>
					<img
						alt="Pokemon"
						src={sprites.other["official-artwork"].front_default}
					></img>
					height:{height}
					weight:{weight}
					types: stats:
				</div>
			)}
		</div>
	);
};

export default PokemonCard;
