import React, { createContext, useState, useContext } from 'react';
import MockAgenda from '../mocks/MockAgenda';

export const GameContext = createContext(
    {
        game: '',
        agendas: [],
        setGame: () => {},
        chooseGame: () => {},
    }
);

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState('p3'); //p3, p4, p5 
    const [agendas, setAgendas] = useState(MockAgenda.agendas);

    const chooseGame = (selectedGame) => {
        setGame(selectedGame);
        setAgendas(MockAgenda.agendas[selectedGame]);
    };

    return (
        <GameContext.Provider value={{ 
                game,
                setGame,
                agendas,
                chooseGame,
            }}>
            {children}
        </GameContext.Provider>
    );
};
