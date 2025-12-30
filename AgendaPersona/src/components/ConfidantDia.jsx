import React from 'react';
import RenderJSON from './renderJSON';
import chariot from "../../public/sprites/p3/chariot/chariot_1.png";


export default function ConfidantDia({ data, game,  }) {
    return (
        <>
            {/* <RenderJSON data={data} /> */}
            {data && data.map((item, index) => (
                <div>
                    {/* <p key={index}>{item?.name}</p> */}
                    <img
                        //O quadro para criar a imagem do personagem tem que ter as medidas 123x66 no figma
                        // src={`../assets/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                        src={`../../public/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                        alt={`p${index}`}
                        
                        className="img-thumbnail"
                        style={{padding:'0px', margin:'0px', gap:'0px'}}
                        width='100%'
                    />

                </div>
            ))}
        </>
    );
}