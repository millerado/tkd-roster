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
        <table className='table'>
          <tr className='row'>
            <td className='column-left'>Divison:</td>
            <td className='column-right'>{player.divison}</td>
          </tr>
          <tr>
            <td className='column-left'>PDGA #:</td>
            <td className='column-right'>{player.pdga}</td>
          </tr>
          <tr>
            <td className='column-left'>Favorite Event:</td>
            <td className='column-right'>{player.favEvent}</td>
          </tr>
          <tr>
            <td className='column-left'>Favorite Course:</td>
            <td className='column-right'>{player.favCourse}</td>
          </tr>
        </table>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PlayerPopup;
