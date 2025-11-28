import React, { useState } from 'react';
import { useGame } from '../src/context/GameContext';

const Home = () => {
    const { game, chooseGame } = useGame();


    return (
      <>
        <h1>Welcome to Agenda {game}</h1>
        <div className={`${game}`}>


          <input
            type="text"
            value={game}
            onChange={(e) => chooseGame(e.target.value)}
            />

        </div>
      </>
    );
};

export default Home;