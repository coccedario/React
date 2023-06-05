import { Link } from "react-router-dom";

const Nav = (props) => {



    return (
        <nav>
            <div>

                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/Cuerdas">Cuerdas</Link></li>
                    <li><Link to= "/Percusion">Percusion</Link></li>
                    <li><Link to= "/Teclados">Teclados</Link></li>
                    <li><Link to= "/Vientos">Vientos</Link></li>
                    <li><Link to= "/Nosotros">Nosotros</Link></li>
                    <li><Link to= "/Contacto">Contacto</Link></li>



                </ul>



            </div>




        </nav>

    )
}

export default Nav;