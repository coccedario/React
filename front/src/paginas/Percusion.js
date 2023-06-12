import React from 'react';
import { Link } from "react-router-dom";


import './../estilos/percusion.css';

const Percusion = (props) => {
    return (

        <main>
            <div className="Mainnos">

                <div className="Catalogo  ">

                    <h3>Catalogo de Pianos y Teclados</h3>
                    <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

                </div>
                <Link to="/Galeria/bateria">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/baterias.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <p>Baterias Acusticas</p>
                            <p>Solidrum - Yamaha - Pearl - Tama</p>
                            <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                                doloremque
                                quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                                veritatis ad quae voluptatem adipisci maiores modi!</p>
                            <p>Ver Galeria</p>
                        </div>

                    </div>
                </Link>

                <Link to="/Galeria/bateria">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/tambores.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <p>Tambores y Tumbadoras</p>
                            <p>Yamaha-Hohner- Tama</p>
                            <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                                doloremque
                                quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                                veritatis ad quae voluptatem adipisci maiores modi!</p>
                            <p>Ver Galeria</p>
                        </div>

                    </div>
                </Link>

                <Link to="/Galeria/bateria">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/platillos.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <p>Platillos</p>
                            <p>Istambul-Zildjiam-Sabian-Paiste</p>
                            <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                                doloremque
                                quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                                veritatis ad quae voluptatem adipisci maiores modi!</p>
                            <p>Ver Galeria</p>
                        </div>



                    </div>
                </Link>
                <Link to="/Galeria/acusticas">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/percusion varios.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <p>Instrumentos de Percusion Varios</p>
                            <p>Yamaha-Hohner- Tama</p>
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

export default Percusion;