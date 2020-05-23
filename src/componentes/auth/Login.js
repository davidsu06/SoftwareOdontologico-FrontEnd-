import React, {useState, useEffect, useContext} from 'react';
import logo from '../../media/Logo.png'
import { Link } from 'react-router-dom';
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
        <div id="fondo_inicio">
            {alerta ? <div className="bg-danger text-center text-white font-weight-bold" style={{padding:'30px 0'}} >{alerta.msg}</div>  :null}
            <div className="mobile-screen">
                <div className="header">
                    <h1 id="h1Login" className="font-weight-bold text-white"><img  src={logo} alt="Logo odontología" className="w-25"/> Inicio de Sesión</h1>
                </div>
                
                <form id="formLogin" onSubmit={onSubmit}>
                    <label className="labelLogin text-white font-weight-bold">Documento:</label>
                    <input className="inputLogin" type="text" name="documento" placeholder="Digite su Documento" value={documento} onChange={guardarInhtmlFormacion} />

                    <label className="labelLogin text-white font-weight-bold">Contraseña:</label>
                    <input className="inputLogin" type="password" name="password" placeholder="Digite su Contraseña" value={password} onChange={guardarInhtmlFormacion} />

                    <button type="submit" className="login-btn font-weight-bold">Iniciar Sesión</button>
                </form>
                
                <div className="other-options">
                    <div id="option" ><p id="option-text"><i className="fas fa-arrow-circle-left font-weight-bold mr-2"></i><Link to={'/'} className="font-weight-bold text-white">Ir a Inicio</Link></p></div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;