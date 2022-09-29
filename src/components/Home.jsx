import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import PokemonCard from "./PokemonCard";

const client = axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon/" });
const Home = () => {
	const [pokedex, setPokedex] = useState([]);
	const [selectedPokemonId, setSelectedPokemonId] = useState(1);
	useEffect(() => {
		client.get("?limit=251").then((response) => {
			const { data } = response;
			setPokedex(data.results);
		});
	}, []);
	const displayPokemonList = (pokedex) => {
		const pokemonList = pokedex.map((obj) => (
			<div
				key={obj.name}
				onClick={() => setSelectedPokemonId(pokedex.indexOf(obj) + 1)}
			>
				{obj.name}
			</div>
		));
		return (
			<Paper style={{ maxHeight: 200, overflow: "auto" }}>{pokemonList}</Paper>
		);
	};
	return (
		<div>
			{pokedex[0] && displayPokemonList(pokedex)}
			<div>
				{selectedPokemonId && (
					<PokemonCard selectedPokemonId={selectedPokemonId} />
				)}
			</div>
		</div>
	);
};

export default Home;
