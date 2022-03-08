import React,{Component} from "react";
import PilasConvencionales from "./Pilas";
import BateriaLitio from "./Baterias";
import Hidrogeno from "./BateriasHidrogeno";
import Bitcoin from "./Bitcoin";



class Articulo extends Component{
    render(){
      return(
        <div>
          <PilasConvencionales />
          <BateriaLitio />
          <Hidrogeno />
          <Bitcoin/>
        </div>
      )
    }
  }
  
  export default Articulo