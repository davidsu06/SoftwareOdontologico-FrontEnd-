import React from 'react';
<<<<<<< HEAD
=======
import Logo from '../../media/Logo.png'
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
import {Link} from 'react-router-dom';

const HeaderPrincipal = ({actualizarNavegacion}) => {
    
    return (
<<<<<<< HEAD
        <nav className="nav" style={{backgroundColor:'#196B81'}}>
            <button 
                type="button" 
                className="btn btn-link" 
                href="#!"
=======
        <nav className="navbar" style={{backgroundColor:'#196B81'}}>
            <img src={Logo} alt="Logo Odontología" style={{width:'3%'}} /> 

            <button 
                type="button" 
                className="btn btn-link" 
                style={{color:'white'}}
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
                onClick={()=> actualizarNavegacion('noticias')}
            >Inicio</button>

            <button 
                type="button" 
                className="btn btn-link" 
<<<<<<< HEAD
                href="#!"
=======
                style={{color:'white'}}
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
                onClick={()=> actualizarNavegacion('servicios')}
            >Servicios</button>

            <button 
                type="button" 
                className="btn btn-link" 
<<<<<<< HEAD
                href="#!"
=======
                style={{color:'white'}}
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
                onClick={()=> actualizarNavegacion('quienes')}
            >Quienes Somos</button>

            <button 
                type="button" 
                className="btn btn-link" 
<<<<<<< HEAD
                href="#!"
                onClick={()=> actualizarNavegacion('contactenos')}
            >Contactenos</button>

            <Link to={'/iniciar-sesion'} className="btn btn-link" >
                Iniciar Sesión
            </Link>
        </nav>
            
=======
                style={{color:'white'}}
                onClick={()=> actualizarNavegacion('contactenos')}
            >Contactenos</button>

            <Link to={'/iniciar-sesion'} className="btn btn-success my-2 my-sm-0 ml-auto" style={{color:'white'}}>
                Iniciar Sesión
            </Link>    
        </nav>
            
            
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
      );
}
 
export default HeaderPrincipal;