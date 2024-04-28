import PlayerBox from './PlayerBox';

function TeamLevel({ team, setPopupState, setPlayer }) {
  return (
    <div className='team-box' id={team.name}>
      <h2 className='team-name'>{team.name}</h2>
      <p className='team-description'>{team.description}</p>
      <div className='player-grid'>
        {team.players.map((player, index) => (
          <PlayerBox
            key={index}
            player={player}
            setPopupState={setPopupState}
            setPlayer={setPlayer}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamLevel;
