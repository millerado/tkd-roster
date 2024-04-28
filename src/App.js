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
      <p className='team-description'>
        Our mission is to unite individuals through the shared passion for disc
        golf, cultivating a culture of respect and relentless pursuit of
        excellence. We strive to create an environment where every team member
        is empowered to reach their full potential, both on and off the
        course.Through unwavering sportsmanship and camaraderie, we aim to
        elevate the standard of disc golf, embodying the principles of fair
        play, integrity, and teamwork. As ambassadors of the sport, we commit to
        fostering a community that values diversity, embraces challenges, and
        celebrates the unique strengths each player brings to our team. Our
        mission extends beyond the pursuit of victories; we aspire to inspire,
        uplift, and leave a lasting impact on the disc golf community, promoting
        a legacy of athleticism, character, and shared accomplishment.
      </p>
      <h2 className='team-name'>Meet the Teams</h2>
      <div className='teams'>
        {allTeams.map((team) => (
          <h3>
            <a className='team-button' href={`#${team.name}`}>
              {team.name}
            </a>
          </h3>
        ))}
      </div>
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
