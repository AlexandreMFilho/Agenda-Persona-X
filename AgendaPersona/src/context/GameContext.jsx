import React, { createContext, useState, useContext } from 'react';

export const GameContext = createContext(
    {
        game: '',
        setGame: () => {},
        chooseGame: () => {},
    }
);

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [game, setGame] = useState('p3'); //p3, p4, p5 

    const chooseGame = (selectedGame) => {
        setGame(selectedGame);
    };

    return (
        <GameContext.Provider value={{ 
                game,
                chooseGame,
            }}>
            {children}
        </GameContext.Provider>
    );
};
