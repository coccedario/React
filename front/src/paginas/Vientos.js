import React from 'react';
import { Link } from "react-router-dom";

import './../estilos/vientos.css';


const Vientos = (props) => {
    return (
        <main>
        <div className="Mainnos">

            <div className="Catalogo  ">

                <h3>Catalogo de Pianos y Teclados</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>
            <Link   to= "/Galeria/vientos">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/saxo.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Saxos</p>
                        <p>Yamaha - Selmer Paris - Jupiter</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeria/vientos">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/corno.png" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Baritonos</p>
                        <p>Rhodes-Yamaha-Hohner</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeria/vientos">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/flauta.jpeg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <p>Flautas</p>
                        <p>Yamaha y mas</p>
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

export default Vientos;