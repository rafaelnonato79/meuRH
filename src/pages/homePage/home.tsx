import React from 'react'
import Nav from '../../componentes/nav/nav'
import './home.css'
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage(){
    return(
        <body>        
             <div className="nav" >
                 <Nav />
            </div>
            <div className="main">
                <div className="col-left">
                    <div className="ponto">
                        <h1>BATER PONTO</h1>
                    </div>
                    <div className="calendar">
                        <h1>CALENDÁRIO</h1>
                    </div>
                </div>
                <div className="col-right">
                    <div className="timer">
                        <h1>TIMER</h1>
                    </div>
                    <div className="noticias">
                        <h1>NOTICIAS</h1>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default HomePage;    