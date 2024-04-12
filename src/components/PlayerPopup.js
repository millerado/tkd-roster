function PlayerPopup({ player, trigger }) {
  return trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <img
          src={require(`../img/${player.picture}`)}
          alt={player.name}
          className='player-picture-popup'
        />
        <h1>{player.name}</h1>
        <p>Divison: {player.divison}</p>
        <p>PDGA #: {player.pdga}</p>
        <p>Favorite Event: {player.favEvent}</p>
        <p>Favorite Course: {player.favCourse}</p>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PlayerPopup;
