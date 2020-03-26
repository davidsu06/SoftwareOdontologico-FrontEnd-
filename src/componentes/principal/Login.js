import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/Logo.png'
import './Login.css';

const Login = () => {

    //Creación del State para el inicio de Sesión
    const [sesion, guardarSesion] = useState({
        usuario: '',
        contrasena: ''
    });

    const { usuario, contrasena } = sesion;

    const guardarInhtmlFormacion = e => {
        guardarSesion({
            ...sesion,
            [e.target.name]: [e.target.value]
        });
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div id="contenido" className="justify-content-center align-items-center vh-100">
            <form>
                <h1> <img src={logo} alt="logo" className="w-25 img-fluid" /> Inicio de Sesión </h1>
        
                <fieldset>
                    <label id="etiqueta" htmlFor="name">Usuario:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="usuario" 
                        value={usuario} 
                        onChange={guardarInhtmlFormacion}
                    />
                    
                    <label id="etiqueta" htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="contrasena" 
                        value={contrasena} 
                        onChange={guardarInhtmlFormacion}
                    />
                </fieldset>

                <button id="boton" type="submit">Ingresar</button>

                <Link to={'/'} className="btn bg-light text-left font-weight-bold p-3">
                    Volver a Inicio
                </Link>
                
            </form>
        </div>
        
     );
}
 
export default Login;