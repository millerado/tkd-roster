import PlayerBox from './PlayerBox';

function TeamLevel({ team }) {
  return (
    <div>
      <h2>{team.name}</h2>
      <p>{team.description}</p>
      {team.players.map((player, index) => (
        <PlayerBox key={index} player={player} />
      ))}
    </div>
  );
}

export default TeamLevel;
