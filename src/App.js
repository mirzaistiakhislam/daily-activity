import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DailyActivities from './components/DailyActivities/DailyActivities';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DailyActivities></DailyActivities>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
