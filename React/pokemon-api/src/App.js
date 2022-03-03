import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const Example = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);

    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
  }
  return (
    <div className="App">
      <p>
        <Example />
      </p>
      
    </div>
  );
}

export default App;
