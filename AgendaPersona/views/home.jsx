import React, { useState, useEffect } from 'react';
import { useGame } from '../src/context/GameContext';
import Agenda from '../src/components/Agenda';

import { Dropdown } from 'primereact/dropdown';
import RenderJSON from '../src/components/renderJSON';
        
const Home = () => {
  const { game, chooseGame, agendas } = useGame();

  useEffect(() => {
    document.documentElement.className = `${game} `;
  }, [game]);
  const jogos = [ 'p3', 'p4', 'p5', 'p6' ];
  

  return (
    <>
      <div style={{ width: '100vh', height: '100vh', padding: '20px' }}
        // className={`${game}`}
      >

        {/* <Cabecalho /> */}
        {/* <h1>Welcome to Agenda {game}</h1> */}
        <div className={`${game}`}>
          
          <Dropdown value={game} onChange={(e) =>chooseGame(e.target.value)} options={jogos} optionLabel="code" 
            placeholder="Selecione um jogo" className="w-full md:w-14rem" checkmark={true}  highlightOnSelect={false} />
         
        </div>
        <h4>Home</h4><RenderJSON data={agendas} />
        <Agenda data={agendas?.[game] || []} />
        {/* <Agenda data={`${agendas}.${game}`} /> */}
        {/* <Rodape /> */}
      </div>
    </>
  );
};

export default Home;