import Instrumento from "../componentes/Instrumento";
import { useParams } from "react-router-dom";

const Galeria = (props) => {

    const params = useParams();
    console.log(params);
    const id = params.id;
    console.log(id);
    const productos = [
        {
            grupo:"bateria",
            texto:"Yamaha",
            titulo:"Bateria",
            img:'../img/baterias.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"bateria",
            texto:"Solidrum",
            titulo:"Bateria",
            img:'../img/tobibat.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"bateria",
            texto:"Platillo",
            titulo:"Paiste",
            img:'../img/plato.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Acustica",
            titulo:"Yamaha",
            img:'../img/acustica3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Electro Acustica",
            titulo:"Fender",
            img:'../img/acustica2.png',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Guitarra Electrica",
            titulo:" Gibson ",
            img:'../img/gibson3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Yamaha",
            titulo:"Sintetizador",
            img:'../img/pianoelect2.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Julius",
            titulo:"Piano",
            img:'../img/piano.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Piano Electrico",
            titulo:"Korg",
            img:'../img/pianoelect.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Yamaha",
            titulo:"Acustica",
            img:'../img/acustica3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Fender",
            titulo:"Electro Acusticas",
            img:'../img/acustica2.png',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Gibson",
            titulo:"Electricas",
            img:'../img/gibson3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Yamaha",
            titulo:"Saxos",
            img:'../img/saxo.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Jupiter",
            titulo:"Cornos",
            img:'../img/corno.png',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Flauta",
            titulo:"Yamaha",
            img:'../img/flauta.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"bateria",
            texto:"Yamaha",
            titulo:"Baterias",
            img:'../img/baterias.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"bateria",
            texto:"Clases",
            titulo:"Drumsdoctor",
            img:'../img/tobibat.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"bateria",
            texto:"Platillo",
            titulo:"Paiste",
            img:'../img/plato.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Yamaha",
            titulo:"Acustica",
            img:'../img/acustica3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Fender",
            titulo:"Electro Acusticas",
            img:'../img/acustica2.png',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Gibson",
            titulo:"Electricas",
            img:'../img/gibson3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Yamaha",
            titulo:"Sintetizador",
            img:'../img/pianoelect2.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Julius",
            titulo:"Piano",
            img:'../img/piano.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"teclados",
            texto:"Piano Electrico",
            titulo:"Korg",
            img:'../img/pianoelect.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Yamaha",
            titulo:"Acustica",
            img:'../img/acustica3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Fender",
            titulo:"Electro Acusticas",
            img:'../img/acustica2.png',
            precio: "$ 50.000"
        },
        {
            grupo:"acusticas",
            texto:"Gibson",
            titulo:"Electricas",
            img:'../img/gibson3.jpeg',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Yamaha",
            titulo:"Saxos",
            img:'../img/saxo.jpg',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Jupiter",
            titulo:"Cornos",
            img:'../img/corno.png',
            precio: "$ 50.000"
        },
        {
            grupo:"vientos",
            texto:"Flauta",
            titulo:"Yamaha",
            img:'../img/flauta.jpeg',
            precio: "$ 50.000"
        },
    ]

    const lista = productos.filter(tipo => (tipo.grupo===id));
console.log(lista);

    const styles={

        inicio: {
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "auto",
            backgroundImage: "url(../img/microfonos.jpg)",
            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
        
        
        
        }
    }

    return (
<div style={styles.inicio}>

<Instrumento  elementos={lista}/>


</div>

    )
}

export default Galeria;