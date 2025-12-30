import React, { useState } from 'react';
import { Card } from 'primereact/card';
import Divisoria from './Divisoria';
import CardLocalizacao from './CardLocalizacao';
import { ScrollPanel } from 'primereact/scrollpanel';
import RenderJSON from './renderJSON';
import ConfidantDia from './ConfidantDia';


const Agenda = ({ data, game }) => {
    const [visible, setVisible] = useState(false);
    const [DiaSelecionado, setDiaSelecionado] = useState(null);

    const handleClickDia = (dia) => {
        setDiaSelecionado(dia);
        setVisible(!visible);
    };

    return (
        <>
            <div style={{backgroundColor:'white'}}>
                {/* <h4>Agenda</h4><RenderJSON data={{data, game}} /> */}
                
                </div>
            {/* <button onClick={() => setVisible(!visible)}></button> */}
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
                    {/* DAYTIME */}
                    <div className='timeAgenda'>Daytime</div>
                    {!visible && (
                        <>
                            <div className='colunaAgenda' onClick={() => handleClickDia('mon')}><ConfidantDia data={data?.mon?.daytime} game={game} /></div>{/*Mon*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('tue')}><ConfidantDia data={data?.tue?.daytime} game={game} /></div>{/*Tue*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('wed')}><ConfidantDia data={data?.wed?.daytime} game={game} /></div>{/*Wed*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('thu')}><ConfidantDia data={data?.thu?.daytime} game={game} /></div>{/*Thu*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('fri')}><ConfidantDia data={data?.fri?.daytime} game={game} /></div>{/*Fri*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('sat')}><ConfidantDia data={data?.sat?.daytime} game={game} /></div>{/*Sat*/}
                        </>
                    )}
                    {visible && (
                        <>
                            <ScrollPanel style={{ width: '100%', height: '100%'}} onClick={() => setVisible(false)}>
                                <CardLocalizacao time="daytime" dia={DiaSelecionado} data={data?.[DiaSelecionado]?.daytime} game={game} />
                            </ScrollPanel>
                        </>
                    )}


                </Divisoria>
                <Divisoria altura={47} >
                    {/* EVENING */}
                    <div className='timeAgenda'>Evening</div>
                    {!visible && (
                        <>
                            <div className='colunaAgenda' onClick={() => handleClickDia('mon')}><ConfidantDia data={data?.mon?.evening} game={game} /></div>{/*Mon*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('tue')}><ConfidantDia data={data?.tue?.evening} game={game} /></div>{/*Tue*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('wed')}><ConfidantDia data={data?.wed?.evening} game={game} /></div>{/*Wed*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('thu')}><ConfidantDia data={data?.thu?.evening} game={game} /></div>{/*Thu*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('fri')}><ConfidantDia data={data?.fri?.evening} game={game} /></div>{/*Fri*/}
                            <div className='colunaAgenda' onClick={() => handleClickDia('sat')}><ConfidantDia data={data?.sat?.evening} game={game} /></div>{/*Sat*/}
                        </>
                    )}
                    {visible && (
                        <>
                            <ScrollPanel style={{ width: '100%', height: '100%' }} onClick={() => setVisible(false)}>
                                <CardLocalizacao time="evening" dia={DiaSelecionado} data={data?.[DiaSelecionado]?.evening} game={game} />
                            </ScrollPanel>
                            {/* </div> */} 
                        </>
                    )}
                </Divisoria>

            </div>

        </>
    );
};

export default Agenda;