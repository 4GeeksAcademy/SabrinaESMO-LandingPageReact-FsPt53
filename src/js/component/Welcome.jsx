import React from "react";

const Welcome = () => {
    return (
        <div className="mx-4 px-4 mt-3">
            <div className="p-3 mb-2 bg-secondary bg-opacity-25 justify-content-center">
                <h1 className="">A Warm Welcome!</h1>
                <p>Has entrado a la nueva galería online del artista Pablo Estévez.
                    Su obra se enfoca en representar los sueños, las emociones,
                    los sentimientos, los recuerdos que viven dentro de él, y su forma de interpretar la vida.
                    Aquí podrás conocer su historia, contemplar sus obras, y próximamente visitar la tienda online.
                    También puedes contactar con nosotros ante dudas o sugerencias.<br></br>

                </p>
                <button className="buttonWelcome" role="button">Ver la historia del artista</button>
            </div>
        </div>

    );
};

export default Welcome;