import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //Creación del State para el inicio de Sesión
    const [sesion, guardarSesion] = useState({
        usuario:'',
        contrasena:''
    });

    const {usuario, contrasena} = sesion;

    const guardarInformacion = e =>{
        guardarSesion({
            ...sesion,
            [e.target.name]:[e.target.value]
        });
    }

    // const onSubmit= e =>{
        
    // }

    return ( 
        <div className="row card justify-content-center align-items-center vh-100">
            <form>
                <div className="form-group">
                    <label htmlFor="usuario">Usuario:</label>
                    <input type="email"
                        className="form-control"
                        id="usuario"
                        name="usuario"
                        value={usuario} 
                        onChange={guardarInformacion}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="contrasena" 
                        value={contrasena}
                        onChange={guardarInformacion}
                    />
                </div>

                <Link to={'/'} className="btn btn-link">Regreso a Inicio</Link>

                <button 
                    type="submit" 
                    className="btn btn-primary"
                >Iniciar Sesión</button>
   
                
            </form>

            
        </div>
        
     );
}
 
export default Login;