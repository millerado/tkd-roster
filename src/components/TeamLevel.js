import PlayerBox from './PlayerBox';

function TeamLevel({ team }) {
  return (
    <div className='team-box'>
      <h2 className='team-name'>{team.name}</h2>
      <p className='team-description'>{team.description}</p>
      <div className='player-grid'>
        {team.players.map((player, index) => (
          <PlayerBox key={index} player={player} />
        ))}
      </div>
    </div>
  );
}

export default TeamLevel;
