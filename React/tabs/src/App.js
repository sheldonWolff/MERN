import './App.css';
import Tabs from './components/Tabs';
import { useState } from 'react';

function App() {
  const [tabInfo, setTabInfo] = useState([
    "Tab 1 content showing here.",
    "Tab 2 content showing here.",
    "Tab 3 content showing here."
  ])
  const [index, setIndex] = useState()
  return (
    <div className="App">
      <Tabs index={ index } setIndex={ setIndex }/>
      <p>{ tabInfo[index] }</p>
    </div>
  );
}

export default App;
