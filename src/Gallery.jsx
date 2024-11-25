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

export default function Gallery({ pokemonList }) {
  const randomizedList = randomizeArray(pokemonList);

  return (
    <main className="cards-gallery">
      {randomizedList.map((pok, index) => (
        <ImageCard key={index} name={pok.name} imageURL={pok.image} />
      ))}
    </main>
  );
}

function ImageCard({ name, imageURL }) {
  return (
    <div className="image-card">
      <div className="image-wrapper">
        <img src={imageURL} alt={`Picture of Pokemon ${name}`} />
      </div>
      <h2 className="image-title">{name}</h2>
    </div>
  );
}
