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
        <nav className="navbar navbar-expand-lg navbar-light border-bottom navhor  alineartitulo">
            <button onClick={esconder} className="btn" id="menu-toggle"><span className="navbar-toggler-icon"></span></button>
            <h1 className="alineartitulo">{titulo}</h1>
            <Link to={'/'} onClick={()=>cerrarSesion()} className="btn btn-danger ml-auto"><span className="alineartitulo">Cerrar Sesión</span></Link>
        </nav>
     );
}
 
export default MenuAdmin;