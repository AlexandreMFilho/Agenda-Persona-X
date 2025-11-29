import React from 'react';
import { useGame } from '../context/GameContext';

import { Card } from 'primereact/card';


const Agenda = ({ }) => {
    const { game } = useGame();

    return (
        <>
            {/* <h2>Agenda</h2> */}
            <div
                style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '95%',
                    border: '1px solid #000000ff', padding: '10px', borderRadius: '10px'
                }}
                className='fundo'
                >
                    <div
                        style={{border: '1px solid #000000ff', height: '50%', width: '100%' }}   
                        >
                        1
                    </div>
                    <div
                        style={{border: '1px solid #000000ff', height: '50%', width: '100%'}}
                        >
                        2
                    </div>
            </div>
            
        </>
    );
};

export default Agenda;