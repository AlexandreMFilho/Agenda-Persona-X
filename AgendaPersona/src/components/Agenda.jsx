import React from 'react';
import { useGame } from '../context/GameContext';

import { Card } from 'primereact/card';
import Divisoria from './Divisoria';


const Agenda = ({ }) => {
    const { game } = useGame();

    return (
        <>
            <div
                className='fundoAgenda'
            >
                <Divisoria altura={6}>
                    <div className='timeAgenda'></div>
                    <div className='diasAgenda'>Mon</div>
                    <div className='diasAgenda'>Tue</div>
                    <div className='diasAgenda'>Wed</div>
                    <div className='diasAgenda'>Thu</div>
                    <div className='diasAgenda'>Fri</div>
                    <div className='diasAgenda'>Sat</div>
                </Divisoria>
                <Divisoria altura={47} >
                    <div className='timeAgenda'>Daytime</div>
                    <div className='colunaAgenda'>1</div>
                    <div className='colunaAgenda'>2</div>
                    <div className='colunaAgenda'>3</div>
                    <div className='colunaAgenda'>4</div>
                    <div className='colunaAgenda'>5</div>
                    <div className='colunaAgenda'>6</div>
                </Divisoria>
                <Divisoria altura={47} >
                    <div className='timeAgenda'>Evening</div>
                    <div className='colunaAgenda'>1</div>
                    <div className='colunaAgenda'>2</div>
                    <div className='colunaAgenda'>3</div>
                    <div className='colunaAgenda'>4</div>
                    <div className='colunaAgenda'>5</div>
                    <div className='colunaAgenda'>6</div>
                </Divisoria>

            </div>

        </>
    );
};

export default Agenda;