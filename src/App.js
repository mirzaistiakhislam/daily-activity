import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DailyActivities from './components/DailyActivities/DailyActivities';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DailyActivities></DailyActivities>
    </div>
  );
}

export default App;
