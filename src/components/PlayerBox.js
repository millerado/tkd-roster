import blankProfilePicture from '../img/blank-profile-picture.png';

function PlayerBox({ player, setPopupState, setPlayer }) {
  return (
    <div className='player-box' onClick={handleClick}>
      <img
        src={
          player.picture
            ? require(`../img/${player.picture}`)
            : blankProfilePicture
        }
        alt={player.name}
        className='player-picture'
      />
      <h2 className='player-name'>{player.name}</h2>
    </div>
  );

  function handleClick() {
    setPopupState(true);
    setPlayer(player);
  }
}

export default PlayerBox;
