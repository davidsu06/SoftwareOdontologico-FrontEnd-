import React, {useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { Link } from 'react-router-dom';


const MenuAdmin = ({actualizarBandera,Bandera,titulo}) => {

    // Extraer context de Auth
    const {cerrarSesion} = useContext(AuthContext);
    
    const esconder = ()=>{
        
        if (Bandera===true){
            actualizarBandera(false);
            console.log(Bandera);
            return;
        }
        else {
            actualizarBandera(true);
            console.log(Bandera);
            return;
        }
        
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light border-bottom navhor">
            <button onClick={esconder} className="btn" id="menu-toggle"><i className="fas fa-align-justify text-white"></i></button>
            <h1 className='ml-auto menuadmti'>{titulo}</h1>
            <Link to={'/'} onClick={()=>cerrarSesion()} className="btn btn-danger ml-auto" title="Cerrar Sesión"><i class="fas fa-sign-out-alt text-white"></i></Link>
        </nav>
     );
}
 
export default MenuAdmin;