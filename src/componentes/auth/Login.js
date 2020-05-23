import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/Logo.png'
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
        // eslint-disable-next-line
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
        <div className="container">
            <div className="abs_center">
                <form id="form_login" className="justify-content-center" onSubmit={onSubmit}>
                    <div className="rounded-pill py-3 mb-2" style={{backgroundColor:'rgba(40,35,90,1)'}}>
                        <p className="text-center"><img src={logo} alt="logo" className="img-fluid" style={{width:'20%'}}/></p>
                        <h1 className="text-white text-center font-weight-bold">Inicio de Sesión</h1>
                    </div>
                    
            
                    {alerta ? <div className="bg-danger text-center text-white font-weight-bold mb-2" style={{padding:'20px'}} >{alerta.msg}</div>  :null}

                    <fieldset>
                        <label id="etiqueta" htmlFor="name" className="text-white font-weight-bold">Documento:</label>
                        <input 
                            type="text" 
                            id="name"
                            className="inputs_login" 
                            name="documento" 
                            placeholder="Digite el Documento"
                            value={documento} 
                            onChange={guardarInhtmlFormacion}
                        />
                        
                        <label id="etiqueta" htmlFor="password" className="text-white font-weight-bold">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="inputs_login" 
                            name="password" 
                            placeholder="Digite la contraseña"
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
            
        </div>
        
     );
}
 
export default Login;