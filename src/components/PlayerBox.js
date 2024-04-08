import blankProfilePicture from '../img/blank-profile-picture.png';

function PlayerBox({ player }) {
  return (
    <div className='player-box'>
      <h2 className='player-name'>{player.name}</h2>
      <img
        src={
          player.picture
            ? require(`../img/${player.picture}`)
            : blankProfilePicture
        }
        alt={player.name}
        className='player-picture'
      />
      <p className='player-pdga'>{player.pdga}</p>
      <p className='player-division'>{player.divison}</p>
    </div>
  );
}

export default PlayerBox;
