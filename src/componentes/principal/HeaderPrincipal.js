import React from 'react';
import {Link} from 'react-router-dom';

const HeaderPrincipal = ({actualizarNavegacion}) => {
    
    return (
        <nav className="nav" style={{backgroundColor:'#196B81'}}>
            <button 
                type="button" 
                className="btn btn-link" 
                href="#!"
                onClick={()=> actualizarNavegacion('noticias')}
            >Inicio</button>

            <button 
                type="button" 
                className="btn btn-link" 
                href="#!"
                onClick={()=> actualizarNavegacion('servicios')}
            >Servicios</button>

            <button 
                type="button" 
                className="btn btn-link" 
                href="#!"
                onClick={()=> actualizarNavegacion('quienes')}
            >Quienes Somos</button>

            <button 
                type="button" 
                className="btn btn-link" 
                href="#!"
                onClick={()=> actualizarNavegacion('contactenos')}
            >Contactenos</button>

            <Link to={'/iniciar-sesion'} className="btn btn-link" >
                Iniciar Sesión
            </Link>
        </nav>
            
      );
}
 
export default HeaderPrincipal;