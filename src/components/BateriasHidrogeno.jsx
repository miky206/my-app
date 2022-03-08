import React from 'react';
import Autonomia from './Autonomia';
import Carga from './Carga';
const styles={
    height : 250,
    width:250
}


class Hidrogeno extends React.PureComponent{



    render(){
        return(
        <div>
            <h1>Baterías de Hidrogeno</h1>
            <p>Las baterias de hidrogeno, es una alternativa muy interesante a las baterias electricas</p>
            <img styles={styles} src ='https://www.magnuscmd.com/wp-content/uploads/2019/06/featured.jpg' alt = ''></img>
            <Autonomia km={100}/>
            <Carga carga="No es posibe."/>
        </div>
        )
    }
}


export default Hidrogeno;