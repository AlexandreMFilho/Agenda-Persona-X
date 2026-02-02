import React, { useState } from 'react';
import Divisoria from './Divisoria';
import CardLocalizacao from './CardLocalizacao';
import { ScrollPanel } from 'primereact/scrollpanel';
import RenderJSON from './renderJSON';
import ConfidantDia from './ConfidantDia';


const Agenda = ({ data, game }) => {
    const [visible, setVisible] = useState(false);
    const [DiaSelecionado, setDiaSelecionado] = useState(null);
    const DIAS = [
        {label:'Mon', value:'mon'},
        {label:'Tue', value:'tue'},
        {label:'Wed', value:'wed'},
        {label:'Thu', value:'thu'},
        {label:'Fri', value:'fri'},
        {label:'Sat', value:'sat'}
    ];
    const TIMES = [
        {label:'Daytime', value:'daytime'},
        {label:'Evening', value:'evening'}
    ];

    const handleClickDia = (dia) => {
        setDiaSelecionado(dia);
        setVisible(!visible);
    };

    return (
        <>
            {/* DIV PARA DEBUG com o RenderJSON*/}
            <div style={{backgroundColor:'white'}}>
                {/* <h4>Agenda</h4><RenderJSON data={{data, game}} /> */}
            </div>


            <div
                className='fundoAgenda'
            >
                <Divisoria altura={6}>
                    <div className='timeAgenda'></div>
                    {DIAS.map((dia) => (
                        <div className='diasAgenda'>{dia.label}</div>
                    ))}

                </Divisoria>

                {TIMES.map((time)=>(
                    <Divisoria altura={47} >
                        <div className='timeAgenda'>{time.label}</div>
                        {!visible && (
                            <>
                               {DIAS.map((dia)=>(
                                <div className='colunaAgenda' onClick={() => handleClickDia(dia.value)}><ConfidantDia data={data?.[dia.value]?.[time.value]} game={game} /></div>    
                                ))} 
                            </>
                        )}
                        {visible && (
                            <>
                                <ScrollPanel className='scrollPanelAgenda' onClick={() => setVisible(false)}>
                                    <CardLocalizacao time={time.value} dia={DiaSelecionado} data={data?.[DiaSelecionado]?.[time.value]} game={game} />
                                </ScrollPanel>
                            </>
                        )}
                    </Divisoria>
                ))} 
            </div>

        </>
    );
};

export default Agenda;