const Contacto = (props) => {
    return (
<main>
       
        <div className="inicio">

        <div className="cuadro">

            <form className="contacto" action="">

                <h5>Coloca tus datos para que te contactemos</h5>
                <br/>
                <div className="renglon">

                    <p><label for="">Nombre</label></p>
                    <p><input type="text"/></p>

                </div>

                <div className="renglon">

                    <p><label for="">e-mail</label></p>
                    <p><input type="email"/></p>

                </div>

                <div className="renglon">

                    <p><label for="">telefono</label></p>
                    <p><input type="text"/></p>

                </div>

                <div className="renglon">

                    <p><label for="">Consulta</label></p>
                    <p><textarea name="" id="" cols="30" rows="5"></textarea></p>

                </div>

                <p><input type="submit" value="Enviar"/></p>

            </form>
        </div>
        </div>
    </main>

    )
}

export default Contacto;