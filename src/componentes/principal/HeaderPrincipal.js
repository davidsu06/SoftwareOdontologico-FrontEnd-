import React from 'react';
import Logo from '../../media/Logo.png'
import {Link} from 'react-router-dom';

const HeaderPrincipal = ({actualizarNavegacion}) => {
    
    return (
        <nav className="navbar" style={{backgroundColor:'#196B81'}}>

            <button
                type="button" 
                className="btn btn-link" 
                style={{width:'3%'}}
                onClick={()=> actualizarNavegacion('inicio')}
            ><img src={Logo} alt="Logo Odontología" className="w-100"/></button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('inicio')}
            ><b>Inicio</b></button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('noticias')}
            ><b>Noticias</b></button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('servicios')}
            ><b>Servicios</b></button>

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('salud')}
            ><b>Salud Dental</b></button>
            
            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('contactenos')}
            ><b>Contactenos</b></button>
            
            <Link to={'/iniciar-sesion'} className="btn btn-success my-2 my-sm-0 ml-auto" style={{color:'white'}}>
                <b>Iniciar Sesión</b>
            </Link>    

        </nav>     
      );
}
 
export default HeaderPrincipal;