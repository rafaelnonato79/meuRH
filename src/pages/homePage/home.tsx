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
        </body>
    )
}

export default HomePage;    