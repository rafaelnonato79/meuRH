import React from 'react';
import homeRH from '../../assets/images/homeRH.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import LoginComponent from '../../componentes/loginComponent';



function LoginPage(){
    return(<div className="main">
    <div className="left-login ">
        <img src={homeRH} alt="imagem de rh" width="100%" height="100%" />
        <div className="overlay"></div>
    </div>
    <div className="right-login">
        <LoginComponent />
    </div>
</div>
    )
}

export default LoginPage;

