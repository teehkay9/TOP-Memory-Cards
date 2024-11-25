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

      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0); // reset the score for new round
    } else {
      setGuesses(new Set(guesses).add(pokemonName));
      setScore((prevScore) => prevScore + 1);
    }
  }

  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await response.json();

      const pokemonData = data.results.map((pokemon, index) => {
        return {
          name: pokemon.name,
          id: index,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        };
      });

      setPokemonData(pokemonData);
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
