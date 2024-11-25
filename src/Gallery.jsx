import "./Gallery.css";

function randomizeArray(arr) {
  const inputArr = [...arr]; // Make a shallow copy to avoid mutating the original array
  const result = [];

  while (inputArr.length > 0) {
    const randomIndex = Math.floor(Math.random() * inputArr.length);
    const deletedItem = inputArr.splice(randomIndex, 1)[0];
    result.push(deletedItem);
  }

  return result;
}

export default function Gallery({ pokemonList, onClick }) {
  const randomizedList = randomizeArray(pokemonList);

  return (
    <main className="cards-gallery">
      {randomizedList.map((pok) => (
        <ImageCard key={pok.id} name={pok.name} imageURL={pok.image} onClick={onClick} />
      ))}
    </main>
  );
}

function ImageCard({ name, imageURL, onClick }) {
  return (
    <div className="image-card" data-name={name} onClick={onClick}>
      <div className="image-wrapper">
        <img src={imageURL} alt={`Picture of Pokémon ${name}`} />
      </div>
      <h2 className="image-title">{name}</h2>
    </div>
  );
}
