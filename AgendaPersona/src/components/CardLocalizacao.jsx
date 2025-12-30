import React from 'react';
//import do novo componente 
import { Image } from 'primereact/image';
// import chariot from "../assets/sprites/p5/chariot/chariot_1.png";
import chariot from "../../public/sprites/p5/chariot/chariot_1.png";
import RenderJSON from './renderJSON';


export default function CardLocalizacao({ data, time }) {
    return (
        <>
            <h4>{time}</h4>
            {/* <RenderJSON data={data} /> */}
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', minHeight: '100px', height: '80px', borderBottom: '1px solid black' }}>
                <div style={{ display: 'flex', width: '200px', backgroundColor: 'red', height: '100%', boxSizing: 'border', justifyContent: 'center', alignItems: 'center' }}>
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
        </>
    );
}