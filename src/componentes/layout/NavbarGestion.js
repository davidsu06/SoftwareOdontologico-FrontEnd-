import React, { useContext } from 'react';
import logo from '../../media/Logo.png';
import AuthContext from '../../context/autenticacion/authContext';

const NavbarGestion = ({titulo}) => {
    
    // Extraer los datos del context
    const {usuario, usuarioAutenticado, cerrarSesion} = useContext(AuthContext);

    return ( 
    <>
        <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow text-white">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 text-center" href="#!">
                <img src={logo} alt="logo" className="w-25 float-left ml-5"></img>
            </a>
            <h1 className="display-4">{titulo}</h1>
            <ul className="navbar-dark px-3">
                <li className="nav-item text-nowrap">
                    <button onClick={() => cerrarSesion()} className="btn btn-danger ml-auto" >Cerrar sesión</button>
                </li>
            </ul>
        </nav>        
    </>
    );
}
 
export default NavbarGestion;