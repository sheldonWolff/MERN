import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
    .then(response => {setPokemon(response.data.results)})
    .catch((err) => console.log(err))
  }, []);

  return (
      <div>
        {pokemon.length > 0 && pokemon.map((person, index)=>{
              return (<div key={index}>{person.name}</div>)
        })}
      </div>
  );
}

export default App;
