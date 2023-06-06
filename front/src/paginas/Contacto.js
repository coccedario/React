const Contacto = (props) => {

    const styles={
        inicio: {
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "479px",
            backgroundImage: "url(../img/microfonos.jpg)",
            padding: "50px",
        
        
        
        },
        cuadro: {


            width: "500px",
            height: "auto",
            margin: "0 auto",
           
            background: "#a6adad",
            padding: "30px",
     
            marginBottom: "70px",
            borderRadius: "10px",
        
        },
        
        contacto :{
        
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        
        },
        
       label: {
        
            minWidth: "100px",
        },
        
       input :{
        
            borderRadius: "5px",
        },
        
        textarea: {
        
            maxWidth: "190px",
            borderRadius: "10px",
            resize: "none",
        },
        
        renglon: {
            display: "flex",
        },


    }
    return (
<main>
       
        <div  style={styles.inicio} className="inicio">

        <div style={styles.cuadro}  className="cuadro">

            <form style={styles.contacto}  className="contacto" action="">

                <h5>Coloca tus datos para que te contactemos</h5>
                <br/>
                <div style={styles.renglon}  className="renglon">

                    <p><label style={styles.label}  for="">Nombre</label></p>
                    <p><input style={styles.input} type="text"/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">e-mail</label></p>
                    <p><input style={styles.input}  type="email"/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">telefono</label></p>
                    <p><input style={styles.input} type="text"/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">Consulta</label></p>
                    <p><textarea style={styles.textarea} name="" id="" cols="30" rows="5"></textarea></p>

                </div>

                <p><input type="submit" value="Enviar"/></p>

            </form>
        </div>
        </div>
    </main>

    )
}

export default Contacto;