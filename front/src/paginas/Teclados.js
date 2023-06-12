import React from 'react';
import { Link } from "react-router-dom";

import './../estilos/teclados.css';

const Teclados = (props) => {
   
    return (
        <main>
        <div className="Mainnos">

            <div className="Catalogo  ">

                <h3>Catalogo de Pianos y Teclados</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>
            <Link   to= "/Galeria/teclados">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/piano.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Pianos Acusticos</p>
                        <p>Steinwai & sons - Bloothner - Julius</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeria/teclados">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/pianoelect2.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Pianos Electricos</p>
                        <p>Rhodes-Yamaha-Hohner</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeria/teclados">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/sinte.webp" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Sintetizadores</p>
                        <p>Korg-Casio-Roland</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
                </Link>


        </div>
    </main>

    )
}

export default Teclados;