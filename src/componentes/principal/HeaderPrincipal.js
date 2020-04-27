import React from 'react';
import Logo from '../../media/Logo.png'
import {Link} from 'react-router-dom';

const HeaderPrincipal = ({actualizarNavegacion}) => {
    
    return (
        <nav className="navbar" style={{backgroundColor:'#196B81'}}>

            <button
                type="button" 
                className="btn btn-link mr-3" 
                style={{width:'3%'}}
                onClick={()=> actualizarNavegacion('inicio')}
            ><img src={Logo} alt="Logo Odontología" className="w-100"/></button>

            <button 
                type="button" 
                className="btn btn-link mr-3" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('inicio')}
            ><i className="fas fa-home text-white"></i><br/><b>Inicio</b></button>

            <button 
                type="button" 
                className="btn btn-link mr-3" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('noticias')}
            ><i className="far fa-newspaper text-white"></i><br/><b>Noticias</b></button>

            <button 
                type="button" 
                className="btn btn-link mr-3" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('servicios')}
            ><i className="fas fa-tooth text-white"></i><br/><b>Servicios</b></button>

            <button 
                type="button" 
                className="btn btn-link mr-3" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('salud')}
            ><i className="fas fa-heartbeat"></i><br/><b>Salud Dental</b></button>
            
            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('preguntas')}
            ><i className="fas fa-comments text-white"></i><br/><b>Preguntas</b></button>
            
            <Link to={'/iniciar-sesion'} className="btn btn-success my-2 my-sm-0 ml-auto" style={{color:'white'}}>
                <b>Iniciar Sesión</b>
            </Link>    

        </nav>     
      );
}
 
export default HeaderPrincipal;