import './App.css';
import Header from './components/Header';
import TeamLevel from './components/TeamLevel';
import allTeams from './teamData';

function App() {
  return (
    <div className='App'>
      <Header />
      {allTeams.map((team, index) => (
        <TeamLevel key={index} team={team} />
      ))}
    </div>
  );
}

export default App;
