export default function ConfidantDia({ data, game,  }) {
    return (
        <>
            {data && data.map((item, index) => (
                <div>
                    <img
                        //O quadro para criar a imagem do personagem tem que ter as medidas 123x66 no figma
                        src={`/sprites/${game}/${item?.name}/${item?.name}_1.png`}
                        alt={`p${index}`}
                        className="img-thumbnail ConfidantDiaImg"
                        width='100%'
                    />

                </div>
            ))}
        </>
    );
}