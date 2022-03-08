import React from "react";
import Autonomia from "./Autonomia";
import Carga from "./Carga";
import Likes from "./Likes";
function BateriaLitio(){
    return(
        <div>
            <h3>Baterias electricas</h3>
            <p>
                Gracias a las nuevas tecnologias que afectan a las baterias,
                la autonomia de los coches electricos esta aumentando a pasos agigantados.
            </p>
            <Autonomia km={400}/>
            <Carga carga='si es posible' />
            <Likes/>
            <br />
        </div>
    ); 
}

export default BateriaLitio;