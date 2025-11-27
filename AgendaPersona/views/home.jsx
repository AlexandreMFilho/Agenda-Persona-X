import React, { useState } from 'react';
import { useGame } from '../src/context/GameContext';

const Home = () => {
    const { game, setGame } = useGame();


    return (
      <>
        <h1>Welcome to Agenda {game}</h1>

        {/* <input
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        /> */}

      </>
    );
};

export default Home;