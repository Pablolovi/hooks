// SRC/App.jsx
import React, { useState} from 'react';
import useFetchCharacter from './hooks/useFetchCharacter.js';
import CharacterCard from './components/CharacterCard.jsx';
import './App.css'; 

const App = () => {
  const [pokemosSearch, setPokemosSearch] = useState('');
  const [rickSearch, setRickSearch] = useState('');
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useFetchCharacter(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useFetchCharacter(urlRick);

  return (
    <div className="app-container">
      {pokemonLoading && <p>Cargando...</p>}
      {pokemonError && <p>Error: {pokemonError}</p>}
      {pokemonData && !pokemonLoading && !pokemonError && (
        <CharacterCard
          title="Personaje Pokemon"
          name={pokemonData.name}
          image={pokemonData.sprites.front_default}
        />
      )}

      {rickLoading && <p>Cargando...</p>}
      {rickError && <p>Error: {rickError}</p>}
      {rickData && !rickLoading && !rickError && (
        <CharacterCard
        title="Personaje Rick and Morty"
        name={rickData.name}
        image={rickData.image}
      />
      )}
    </div>
  );
};

export default App;