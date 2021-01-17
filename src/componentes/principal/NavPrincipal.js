import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';

const NavPrincipal = ({navegacion, actualizarNavegacion}) => {

    const claseNav = 'nav-item mr-2';

    return ( 
        
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark" style={{backgroundColor:'#006e9c'}}>
            <button
                className="btn btn-link mr-2" 
                onClick={()=> actualizarNavegacion('inicio')}
            ><img src={Logo} alt="Logo Odontología" title="Logo Odontología" style={{maxWidth:'60px'}} /></button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className={navegacion === 'inicio' ? `${claseNav} active` : claseNav}>
                        <a className="nav-link" href="#!"
                            style={{fontSize:'18px'}}
                            onClick={()=> actualizarNavegacion('inicio')}
                        ><i className="fas fa-home mr-1"></i>Inicio
                        </a>
                    </li>

                    {/* <li className={navegacion === 'noticias' ?`${claseNav} active` :claseNav}>
                        <a className="nav-link" href="#!"
                                style={{fontSize:'18px'}}
                                onClick={()=> actualizarNavegacion('noticias')}
                            ><i className="far fa-newspaper mr-1"></i>Noticias
                        </a>
                    </li> */}

                    <li className={navegacion === 'servicios' ? `${claseNav} active` : claseNav}>
                        <a className="nav-link" href="#!"
                                style={{fontSize:'18px'}}
                                onClick={()=> actualizarNavegacion('servicios')}
                            ><i className="fas fa-tooth mr-1"></i>Servicios
                        </a>
                    </li>

                    <li className={navegacion === 'salud' ? `${claseNav} active` : claseNav}>
                        <a className="nav-link" href="#!" 
                                style={{fontSize:'18px'}}
                                onClick={()=> actualizarNavegacion('salud')}
                            ><i className="fas fa-heartbeat mr-1"></i>Salud D.
                        </a>
                    </li>

                    <li className={navegacion === 'preguntas' ? `${claseNav} active` : claseNav}>
                        <a className="nav-link" href="#!" 
                                style={{fontSize:'18px'}}
                                onClick={()=> actualizarNavegacion('preguntas')}
                            ><i className="fas fa-comments mr-1"></i>Preguntas
                        </a>
                    </li>

                    <li className="nav-item mr-4">
                        <Link to={'/iniciar-sesion'} className="btn btn-success font-weight-bold w-100"><i className="fas fa-users mr-2"></i>Iniciar Sesión</Link>      
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavPrincipal;