function PlayerBox({ player }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>{player.pdga}</p>
      <p>{player.divison}</p>
    </div>
  );
}

export default PlayerBox;
