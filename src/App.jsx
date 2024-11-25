import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Gallery from "./Gallery";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await response.json();

      const pokemonData = data.results.map((pokemon, index) => {
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        };
      });

      setPokemonData(pokemonData);
    }
    getPokemonData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Gallery pokemonList={pokemonData} />
    </div>
  );
}

export default App;
