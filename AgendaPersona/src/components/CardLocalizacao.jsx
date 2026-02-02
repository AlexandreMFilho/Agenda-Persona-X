export default function CardLocalizacao({ data, time, dia, onClick, game }) {
    return (
        <>
            {data && data.map((item, index) => (
                <div className='cardLocalizacaoExterno'>
                    <div className='cardLocalizacaoInterno'>
                        <img
                            //O quadro para criar a imagem do personagem tem que ter as medidas 123x66 no figma
                            src={`/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                            alt={`p${index}`}
                            className="img-thumbnail cardLocalizacaoImg"
                            height='100%'
                        />
                    </div>
                    <div onClick={onClick} className='descricaoCardComLocalizacao'>
                        {item?.descricao}

                    </div>
                </div>
            ))}
        </>
    );
}