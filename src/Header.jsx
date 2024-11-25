import "./Header.css";

export default function Header() {
  return (
    <header className="app__header">
      <section className="header__description">
        <h1>Pokemon Memory Game</h1>
        <p>Get points by clicking on an image but don&#39;t click on any more than once!</p>
      </section>
      <Scoreboard />
    </header>
  );
}

function Scoreboard() {
  return (
    <div className="header__scoreboard">
      <h2>Score:</h2>
      <h2>Best Score:</h2>
    </div>
  );
}

async function getPokemonData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  const data = await response.json();

  const pokemonData = data.results.map((pokemon, index) => {
    return {
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    };
  });

  console.log(pokemonData);
}
