import React, {Fragment} from "react";
import Cuadro1 from "../../img/peque.jpg";
import Cuadro2 from "../../img/eternidad.jpg";
import Cuadro3 from "../../img/niñoColumpio.jpg";
import Card from "./Card";

const CardsInfo = () => {
    const data = [
        {
            PaintingImage: Cuadro1,
            PaintingTitle: "1966 camino a un nuevo destino",
            PaintingText: "Probando texto del primer cuadro.",
        },
        {
            PaintingImage: Cuadro2,
            PaintingTitle: "Camino a la eternidad",
            PaintingText: "Probando nuevamente otro texto distinto",
        },
        {
            PaintingImage: Cuadro3,
            PaintingTitle: "Suspendido ene l tiempo",
            PaintingText: "Tercer texto que debería verse cambiado",
        }
    ]

    return (
        <div className="row">
            {
                data.map((item, index) => {
                    <Card
                        key={index}
                        PaintingImage={item.PaintingImage}
                        PaintingTitle={item.PaintingTitle}
                        PaintingText={item.PaintingText}
                    />
                })
            }
        </div>
    );
};

export default CardsInfo;