import Form from "./components/Form";
import DisplayColor from "./components/DisplayColor";
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState([]);
  console.log(colors)
  return (
    <div className="App">
      <Form setColors={setColors} colors={colors}/>
      <DisplayColor colors={colors}/>
    </div>
  );
}

export default App;
