import React from 'react';

const Instrumento = (props) => {


    const { elementos } = props;
    console.log(elementos);
    const styles = {

        card: {

            height: "400px",
            width: "300px",
            color: "#008b8b",
            background: "white",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #008b8b",
            borderRadius: "10px",
            margin: "10px"

        },
        inicio: {
            width: "1020px",
            height: "auto",
            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignContents: "space-between"
        
        
        }



    }


    return (

        <div style={styles.inicio}>

            {elementos.map((elemento) =>
                <div style={styles.card}>
                    <h1>{elemento.titulo}</h1>

                    <h5>{elemento.texto}</h5>
                    <img src={elemento.img} height="200px" width="200px" alt="" />
                    <p>{elemento.precio}</p>
                </div>)}


        </div>
    )
}

export default Instrumento;