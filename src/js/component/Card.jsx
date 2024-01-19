import React from "react";
import "./CardsInfo.jsx";

const Card = (props) => {
    const { PaintingImage = '', PaintingTitle, PaintingText} = props;

    return (
            <div className="card mx-5 px-5">
                <div className="card-details">
                    <img src={PaintingImage}></img>
                    <p className="text-title">{PaintingTitle}</p>
                    
                    <p className="text-body">{PaintingText}</p>
                </div>
                <button className="card-button">Mas info</button>
            </div>
    );
};


export default Card;