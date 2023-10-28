import React from 'react';
import NavComponent from '../../componentes/NavComponent';
import './nav.css';
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import logoRH from '../../assets/images/logo-rh.png'
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="nav">
            <div className="logoRH">
                <h1>MEU RH</h1>
                <div className="imagem">
                  <img src={logoRH} alt="logoRH" />
                </div>
            </div>
            <div className="div titulos">
            <Link to="/">
            <NavComponent title={'INICIO'}/>
            </Link>
            <NavComponent title={'PONTO'}/>
            <NavComponent title={'BANCO DE HORAS'}/>
            </div>
        </div>
    )
}

export default Nav;