const Teclados = (props) => {


    const styles={
        mainnos: {
            borderTop: "1px solid #008b8b",
             background: "rgb(1, 0, 8)",
            // background: rgb(1, 0, 8);
             //background: "-moz-linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%)",
            // background: "-webkit-linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%)",
            background: "linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr'#010008', endColorstr=#008b8b, GradientType=1)",
           
            paddingTop: "20px",
            height: "auto",
        },
        catalogo: {
            textAlign: "center",
            color: "#eef5f5",
            width: "960px",
            margin: "0 auto",
            textShadow: "#141414 1px",
        },
        
        
        cuerdas: {
        
            textAlign: "center",
            border: "1px solid #008b8b",
            borderRadius: "10px#",
            width: "88%",
            margin: "0 auto",
            height: "260px",
          // background: "rgb(1, 0, 8)",
            // background: "-moz-linear-gradient(279deg, rgba(1, 0, 8, 1) 0%, rgba(4, 78, 78) 78%)",
            // background: "-webkit-linear-gradient(279deg, rgba(1, 0, 8, 1) 0%, rgba(4, 78, 78) 78%)",
           background: "linear-gradient(279deg, rgba(1, 0, 8, 1) 0%, rgb(4, 78, 78) 78%)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#010008', endColorstr='#008b8b', GradientType=1)",
            padding: "30px",
            color: "#008b8b",
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            marginTop: "20px",
        },
        
        detcuerdas: {
        
            display: "flex",
            flexDirection: "column",
            color: "aliceblue",
        },
        
        imgcuerdas: {
            width: "200px",
            height: "200px",
            backgroundColor: "#008b8b",
            
        },
        
         img :{
            width: "200px",
            height: "200px",
        
        },
        
        // &:hover {
        
        //     transform: "scale(1.03)",
        //     webkitTransform: "scale(1.03)",
        //     mozTransform: "scale(1.03)",
        // }
    }
    return (
        <main>
        <div style={styles.mainnos} className="mainnos">

            <div style={styles.catalogo} className="catalogo  ">

                <h3>Catalogo de Pianos y Teclados</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>
            <a href="galeria.html">
                <div style={styles.cuerdas} className="teclas">
                    <div style={styles.imgcuerdas} className="imgteclas">
                        <img style={styles.img} src="img/piano.jpg" height="240px" alt=""/>

                    </div>
                    <div style={styles.detcuerdas} className="detteclas">
                        <p>Pianos Acusticos</p>
                        <p>Steinwai & sons - Bloothner - Julius</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
            </a>

            <a href="galeria.html">
            <div style={styles.cuerdas} className="teclas">
                    <div style={styles.imgcuerdas} className="imgteclas">
                        <img style={styles.img} src="img/pianoelect2.jpg" height="240px" alt=""/>

                    </div>
                    <div style={styles.detcuerdas} className="detteclas">
                        <p>Pianos Electricos</p>
                        <p>Rhodes-Yamaha-Hohner</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
            </a>

            <a href="galeria.html">
            <div style={styles.cuerdas} className="teclas">
                    <div style={styles.imgcuerdas} className="imgteclas">
                        <img style={styles.img} src="img/sinte.webp" height="240px" alt=""/>

                    </div>
                    <div style={styles.detcuerdas} className="detteclas">
                        <p>Sintetizadores</p>
                        <p>Korg-Casio-Roland</p>
                        <p>Detalle, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus
                            doloremque
                            quibusdam. Eum quaerat obcaecati quod cupiditate quos repudiandae velit rerum at possimus,
                            veritatis ad quae voluptatem adipisci maiores modi!</p>
                        <p>Ver Galeria</p>
                    </div>

                </div>
            </a>


        </div>
    </main>

    )
}

export default Teclados;