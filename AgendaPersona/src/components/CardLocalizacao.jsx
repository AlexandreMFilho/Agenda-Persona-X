import React from 'react';
//import do novo componente 
import { Image } from 'primereact/image';
// import chariot from "../assets/sprites/p5/chariot/chariot_1.png";
import chariot from "../../public/sprites/p5/chariot/chariot_1.png";
import RenderJSON from './renderJSON';


export default function CardLocalizacao({ data, time, dia, onClick, game }) {
    return (
        <>
            {/* <h4>{time} {dia}</h4> */}
            {/* <RenderJSON data={{data, time, dia}} /> */}
            {data && data.map((item, index) => (
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', minHeight: '100px', height: '80px', borderBottom: '1px solid black' }}>
                    <div style={{ display: 'flex', width: '200px', height: '100%', boxSizing: 'border', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            // src={`../../public/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                            //O quadro para criar a imagem do personagem tem que ter as medidas 123x66 no figma
                            src={`../../public/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                            alt={`p${index}`}
                            style={{ width: '100%' }}
                            className="img-thumbnail"
                            height='100%'
                        />
                    </div>
                    <div onClick={onClick} style={{ width: '100%', backgroundColor: 'white', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                        {item?.descricao}

                    </div>
                </div>
            ))}
        </>
    );
}