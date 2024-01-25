import React, {Fragment} from "react";
import Cuadro1 from "../../img/compiViaje.jpg";
import Cuadro2 from "../../img/sueñosNavegante.jpg";
import Cuadro3 from "../../img/sueñosBaco.jpg";
import Cuadro4 from "../../img/Libertad.jpg"
import Card from "./Card.jsx";

const CardsInfo = () => {
    const data = [
        {
            paintingImage: Cuadro1,
            paintingTitle: "Compañero de viaje",
            paintingText: "En esta obra rememoro aquellos momentos de mi infancia en que me sentía solo, mi mente creaba lugares y situaciones donde quisiera estar, acompañado de ese peluche que era la conexión con mi pasado y me recordaba el inicio de la nueva etapa que me marcaría para siempre en lo más profundo de mi alma."
        },
        {
            paintingImage: Cuadro2,
            paintingTitle: "Sueños de navegante",
            paintingText: "A mi mente vienen esos días de lluvia grises donde luego aparecían esos tímidos rayos de sol, y me permitían ser el capitán de mi propio barco. Un simple trozo de papel se convertía en mi tesoro y nos íbamos a navegar por las charcas de agua.",
        },
        {
            paintingImage: Cuadro3,
            paintingTitle: "Sueños de Baco",
            paintingText: "Lo que me llevo a realizar esta obra fue dejar plasmada la esencia de la mujer como centro de la energía, dominando el espacio y el tiempo. Dotada de sensualidad y refinamiento, pero siempre con un carácter firme.",
        },
        {
            paintingImage: Cuadro4,
            paintingTitle: "Libertad",
            paintingText: "Una mirada al pasado, donde los pies descalzos no impedian soñar con marcar goles frente a gradas llenas. Hasta el balón más viejo lo veía como si fuera de oro.",
        },

    ]

    return (
        <div className="row justify-content-center">
            {
                data.map((item, index) => 
                    <Card 
                        key={index}
                        paintingImage={item.paintingImage}
                        paintingTitle={item.paintingTitle}
                        paintingText={item.paintingText}
                    />
                )
            }
        </div>
    );
};

export default CardsInfo;