import React, { useState } from 'react';
import { Card } from 'primereact/card';
import Divisoria from './Divisoria';
import CardLocalizacao from './CardLocalizacao';
import { ScrollPanel } from 'primereact/scrollpanel';
import RenderJSON from './renderJSON';


const Agenda = ({ data, game }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div style={{backgroundColor:'white'}}>
                <h4>Agenda</h4><RenderJSON data={data} />
                
                </div>
            <button onClick={() => setVisible(!visible)}></button>
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
                            <div className='colunaAgenda'><RenderJSON data={data?.mon?.daytime} /></div>{/*Mon*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.tue?.daytime} /></div>{/*Tue*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.wed?.daytime} /></div>{/*Wed*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.thu?.daytime} /></div>{/*Thu*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.fri?.daytime} /></div>{/*Fri*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.sat?.daytime} /></div>{/*Sat*/}
                        </>
                    )}
                    {visible && (
                        <>
                            <ScrollPanel style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}>
                                <CardLocalizacao time="daytime" />
                            </ScrollPanel>
                        </>
                    )}


                </Divisoria>
                <Divisoria altura={47} >
                    {/* EVENING */}
                    <div className='timeAgenda'>Evening</div>
                    {!visible && (
                        <>
                            <div className='colunaAgenda'><RenderJSON data={data?.mon?.evening} /></div>{/*Mon*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.tue?.evening} /></div>{/*Tue*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.wed?.evening} /></div>{/*Wed*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.thu?.evening} /></div>{/*Thu*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.fri?.evening} /></div>{/*Fri*/}
                            <div className='colunaAgenda'><RenderJSON data={data?.sat?.evening} /></div>{/*Sat*/}
                        </>
                    )}
                    {visible && (
                        <>
                            <ScrollPanel style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}>
                                <CardLocalizacao time="evening" />
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