import React, {useState} from 'react';
import logoRH from '../../assets/images/logo-rh.png'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link, useNavigate } from 'react-router-dom';

function LoginComponent(){
    const[usuario, setUsuario] = useState('');
    const[senha, setSenha] = useState('');
    const[autenticado, setAutenticado] = useState(false); // isso será para autenticar o usuário, verificar no backend se o usuário existe  
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();


    const handleLogin = () => {
        //aqui é pra autenticar o usuário
        if(usuario ==='usuario' && senha === 'senha'){
            setAutenticado(true);
            setMostrarSenha((prevState) => !prevState)
            navigate('/HomePage');
        }
        else{
            window.alert('Usuário ou senha incorretos. Por favor, tente novamente.');
        }   
}
    const senhaVisivel = () =>{
    setMostrarSenha(!mostrarSenha);
}
    return(
        <div className="card d-flex justify-justify-content-center">
            <h1>MEU RH</h1>
            <img src={logoRH} alt="logoRH" />
            <p>Boas Vindas</p>
            <div className="usuario">
                <span className="input-group-text m-0 p-0 border-0" id="basic-addon1">
                    <i className="fa fa-user"></i>
                    <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)} placeholder='Usuário'/>
                </span>
            </div>
            <div className="senha">
                <span className="input-group-text m-0 p-0 border-0" id="basic-addon1">
                    <i className="fa fa-lock"></i>
                    <input type={mostrarSenha ? 'text' : 'password'} name={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Senha" ></input>
                    <i onClick={senhaVisivel} className={`visivelSenha fa ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
            </div>
            <button className="botao" onClick={handleLogin}>ENTRAR</button>
            
        </div>   
    ) 
}   

export default LoginComponent;