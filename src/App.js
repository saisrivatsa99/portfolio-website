import './App.css';
import LeftPanel from './components/LeftPanel/leftPanel';
import RightPanel from './components/RightPanel/rightPanel';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
