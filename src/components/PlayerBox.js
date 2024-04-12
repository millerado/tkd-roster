import blankProfilePicture from '../img/blank-profile-picture.png';

function PlayerBox({ player }) {
  return (
    <div className='player-box'>
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
}

export default PlayerBox;
