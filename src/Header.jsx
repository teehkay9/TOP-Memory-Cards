import "./Header.css";

export default function Header({ score, highScore }) {
  return (
    <header className="app__header">
      <section className="header__description">
        <h1>Pokemon Memory Game</h1>
        <p>Get points by clicking on an image but don&#39;t click on any more than once!</p>
      </section>
      <Scoreboard score={score} highScore={highScore} />
    </header>
  );
}

function Scoreboard({ score, highScore }) {
  return (
    <div className="header__scoreboard">
      <h2>Score: {score} </h2>
      <h2>Best Score: {highScore}</h2>
    </div>
  );
}
