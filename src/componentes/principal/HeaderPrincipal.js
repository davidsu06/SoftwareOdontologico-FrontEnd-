import React from 'react';
import Logo from '../../media/Logo.png'
import {Link} from 'react-router-dom';

const HeaderPrincipal = ({actualizarNavegacion}) => {
    
    return (
        <nav className="navbar" style={{backgroundColor:'#196B81'}}>
            <img src={Logo} alt="Logo Odontología" style={{width:'3%'}} /> 

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('noticias')}
            >Inicio</button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('servicios')}
            >Servicios</button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('quienes')}
            >Quienes Somos</button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('contactenos')}
            >Contactenos</button>

            <Link to={'/iniciar-sesion'} className="btn btn-success my-2 my-sm-0 ml-auto" style={{color:'white'}}>
                Iniciar Sesión
            </Link>    
        </nav>
            
            
      );
}
 
export default HeaderPrincipal;