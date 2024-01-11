import React from "react";
import Cuadro1 from "../../img/peque.jpg";


const Card = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="book">
                <button class="button">
                    INFO
                </button>
                <div className="cover">
                    <img src={Cuadro1} className="container object-fit-contain"></img>
                </div>
            </div>
        </div>
    );
};

export default Card;