import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import { getPokemons } from "../data/pokemons"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons,setPokemons] = useState([])
  useEffect( () => {
    getPokemons()
    .then(pokedex => {
      setPokemons(pokedex)
      setIsLoading(false)
    })
    .catch(err => console.error(err))
  }, [])
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div>
      { pokemons.map((p, index) => <Pokemon key={index} name={p.name} id={index+1} /> )}
    </div>
  );
}


export default App;