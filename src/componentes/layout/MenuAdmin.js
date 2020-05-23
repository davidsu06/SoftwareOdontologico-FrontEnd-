import React, {useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { Link } from 'react-router-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const MenuAdmin = ({actualizarBandera,Bandera,titulo}) => {

    // Extraer context de Auth
    const {cerrarSesion} = useContext(AuthContext);
    
    const esconder = ()=>{
        
        if (Bandera===true){
            actualizarBandera(false);
            return;
        }
        else {
            actualizarBandera(true);
            return;
        }
        
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light border-bottom navhor">
            <Tooltip placement="bottomLeft" overlay={Bandera ? 'Ocultar Menú' : 'Mostrar Menú'} overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                <button onClick={esconder} className="btn" id="menu-toggle"><i className="fas fa-align-justify text-white"></i></button>
            </Tooltip>
            <h1 className='ml-auto menuadmti'>{titulo}</h1>
            <Tooltip placement="bottomRight" overlay="Cerrar Sesión" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                <Link to={'/'} onClick={()=>cerrarSesion()} className="btn btn-danger ml-auto"><i className="fas fa-sign-out-alt text-white"></i></Link>
            </Tooltip>
            
        </nav>
     );
}
 
export default MenuAdmin;