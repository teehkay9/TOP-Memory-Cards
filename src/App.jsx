import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Gallery from "./Gallery";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(new Set([]));
  const [highScore, setHighScore] = useState(0);

  function handleClick(event) {
    const pokemonName = event.currentTarget.getAttribute("data-name");
    console.log(pokemonName);

    if (guesses.has(pokemonName)) {
      setGuesses(new Set([]));

      setHighScore((prevHighScore) => (score > prevHighScore ? score : prevHighScore));
      setScore(0); // reset the score for new round
    } else {
      setGuesses(new Set(guesses).add(pokemonName));
      setScore((prevScore) => prevScore + 1);
    }
  }

  useEffect(() => {
    async function getPokemonData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = await response.json();
        const pokemonData = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          id: index,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemonData(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally set error state to display a message to the user
      }
    }
    getPokemonData();
  }, []);

  return (
    <div className="app-container">
      <Header score={score} highScore={highScore} />
      <Gallery pokemonList={pokemonData} onClick={handleClick} />
    </div>
  );
}

export default App;
