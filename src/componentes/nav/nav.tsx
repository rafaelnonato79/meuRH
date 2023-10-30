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
            <Link to="/homePage">
            <NavComponent title={'INICIO'}/>
            </Link>
            <Link to="/Ponto">
            <NavComponent title={'PONTO'}/>
            </Link>
            <Link to="/BancoDeHoras">
              <NavComponent title={'BANCO DE HORAS'}/>
            </Link>
            </div>
            <div className="sair">
              <Link to="/">
                <NavComponent title={'SAIR'}/>
              </Link>
            </div>
        </div>
    )
}

export default Nav;