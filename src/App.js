import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemons from './components/Pokemons'

function App() {
  return (
    <div className="App">
      <h1 className="text-center">React Pokédex Challenge</h1>
      <Pokemons />
    </div>
  );
}

export default App;
