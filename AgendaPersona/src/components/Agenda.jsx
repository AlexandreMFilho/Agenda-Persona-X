import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

import { Card } from 'primereact/card';
import Divisoria from './Divisoria';


//import do novo componente 
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
// import chariot from "../assets/sprites/p5/chariot/chariot_1.png";
import chariot from "../assets/sprites/p5/emperor/emperor_11.png";

const Agenda = ({ }) => {
    const [visible, setVisible] = useState(false);
    const { game } = useGame();

    return (
        <>
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
                    <div className='timeAgenda'>Daytime</div>
                    {!visible && (
                        <>
                            <div className='colunaAgenda'>1</div>
                            <div className='colunaAgenda'>2</div>
                            <div className='colunaAgenda'>3</div>
                            <div className='colunaAgenda'>4</div>
                            <div className='colunaAgenda'>5</div>
                            <div className='colunaAgenda'>6</div>
                        </>
                    )}

                </Divisoria>
                <Divisoria altura={47} >
                    <div className='timeAgenda'>Evening</div>
                    {!visible && (
                        <>
                            <div className='colunaAgenda'>1</div>
                            <div className='colunaAgenda'>2</div>
                            <div className='colunaAgenda'>3</div>
                            <div className='colunaAgenda'>4</div>
                            <div className='colunaAgenda'>5</div>
                            <div className='colunaAgenda'>6</div>
                        </>
                    )}
                    {visible && (
                        <>
                            {/* <div style={{width:'250%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize:'24px', fontWeight:'bold',backgroundColor:'green'}}> */}
                            <ScrollPanel style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}>

                                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', minHeight: '100px', height: '80px', borderBottom: '1px solid black' }}>
                                    <div style={{ display: 'flex', width: '200px', backgroundColor: 'red', height: '100%', boxSizing:'border' , justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                        //O quadro para criar a imagem do personagem tem que ter as medidas 123x66 no figma
                                            src={chariot}
                                            alt="Personagem"
                                            className="img-thumbnail"
                                            height='100%'
                                        />
                                    </div>
                                    <div style={{ width: '100%', backgroundColor: 'white', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                                           Breve Descrição de onde achar esse personagem
                                        
                                        </div>
                                </div>


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