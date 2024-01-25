import React from "react";

const Card = (props) => {
    const { paintingImage, paintingTitle, paintingText } = props;
    return (
        <div className="card mx-3 mb-5 mt-4 ">
            <img src={paintingImage} className="card-image-top"></img>
            <div className="card-body">
                <p className="card-title">{paintingTitle}</p>
                <p className="card-text">{paintingText}</p>
            </div>
            <button className="card-button">Saber más</button>
        </div>
    );
};


export default Card;