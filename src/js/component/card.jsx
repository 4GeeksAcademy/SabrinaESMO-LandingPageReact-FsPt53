import React from "react";

const Card = () => {
    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <div className="card ">
                    <img src="../../img/Cargando con el pasado.jpg"></img>
                    <div className="card__content">
                        <p className="card__title">Cargando con el pasado</p>
                        <p className="card__description">Oleo y acrílico sobre lienzo de 60 x 80 cm</p>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button className="pushable ">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">
                        Push Me
                    </span>
                </button>
            </div>

        </div>
    );
};

export default Card;