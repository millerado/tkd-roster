function PlayerPopup({ player, trigger, setPopupState }) {
  function handleClick() {
    setPopupState(false);
  }

  return trigger ? (
    <div className='popup' onClick={handleClick}>
      <div className='popup-inner'>
        <img
          src={
            player.picture
              ? require(`../img/${player.picture}`)
              : require('../img/blank-profile-picture.png')
          }
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
