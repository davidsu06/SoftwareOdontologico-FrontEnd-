import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/Logo.png'
import './Login.css';
import AlertContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //Extraer valores del context
    const {alerta, mostrarAlerta} = useContext(AlertContext);
    const {mensaje, autenticado, iniciarSesion} = useContext(AuthContext);

    //Creación del State para el inicio de Sesión
    const [sesion, guardarSesion] = useState({
        documento: '',
        password: ''
    });


    useEffect( () =>{
        if(autenticado){
            props.history.push('/gestion-sistema');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado])
    
    const { documento, password } = sesion;

    const guardarInhtmlFormacion = e => {
        guardarSesion({
            ...sesion,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        if(documento.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        iniciarSesion({documento, password});
    }

    return (
        <div className="container" style={{marginTop:'4.5cm'}}>
            <form onSubmit={onSubmit}>

                <h1 className="text-white" style={{textAlign:'center'}}> <img src={logo} alt="logo" className="w-25 img-fluid" /> Iniciar Sesión </h1>
        
                {alerta ? <div className="p-3 mb-2 bg-danger text-white">{alerta.msg}</div>  :null}

                <fieldset>
                    <label id="etiqueta" htmlFor="name" className="text-white">documento:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="documento" 
                        value={documento} 
                        onChange={guardarInhtmlFormacion}
                    />
                    
                    <label id="etiqueta" htmlFor="password" className="text-white">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={guardarInhtmlFormacion}
                    />
                </fieldset>

                <button id="boton" type="submit">Ingresar</button>

                <Link to={'/'} className="btn btn-link text-left font-weight-bold text-white">
                    Volver a Inicio
                </Link>
                
            </form>
        </div>
        
     );
}
 
export default Login;