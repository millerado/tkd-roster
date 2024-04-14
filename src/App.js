import './App.css';
import Header from './components/Header';
import TeamLevel from './components/TeamLevel';
import PlayerPopup from './components/PlayerPopup';
import allTeams from './teamData';
import { useState } from 'react';

function App() {
  const [popupState, setPopupState] = useState(false);
  const [player, setPlayer] = useState({});
  return (
    <div className='App'>
      <Header />
      <PlayerPopup
        trigger={popupState}
        player={player}
        setPopupState={setPopupState}
      />
      <h1>Team Kwik Discs</h1>
      {allTeams.map((team, index) => (
        <TeamLevel
          key={index}
          team={team}
          setPopupState={setPopupState}
          setPlayer={setPlayer}
        />
      ))}
    </div>
  );
}

export default App;
