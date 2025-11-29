import React, { useState, useEffect } from 'react';
import { useGame } from '../src/context/GameContext';
import Agenda from '../src/components/Agenda';

const Home = () => {
  const { game, chooseGame } = useGame();
  useEffect(() => {
    document.documentElement.className = `${game} ${theme}`;

  }, [game]);


  return (
    <>
      <div style={{ width: '100vh', height: '100vh', border: '1px solid #ccc', padding: '20px' }}
        // className={`${game}`}
      >

        {/* <Cabecalho /> */}
        {/* <h1>Welcome to Agenda {game}</h1> */}
        <div className={`${game}`}>
          <input
            type="text"
            value={game}
            onChange={(e) => chooseGame(e.target.value)}
          />

        </div>
        <Agenda />
        {/* <Rodape /> */}
      </div>
    </>
  );
};

export default Home;