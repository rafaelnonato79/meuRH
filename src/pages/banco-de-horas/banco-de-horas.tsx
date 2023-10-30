import React from 'react';
import Nav from '../../componentes/nav/nav';
import './banco-de-horas.css';


function BancoDeHoras(){
    return(
        <body>
        <div className="nav">
            <Nav />
        </div> 
        <div className="banco">
                <h2>Banco de Horas</h2>
        </div>
        </body>
       
    )
}

export default BancoDeHoras;