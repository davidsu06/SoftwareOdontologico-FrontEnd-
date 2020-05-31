import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import Tooltip from 'rc-tooltip';
import Swal from 'sweetalert2';
import 'rc-tooltip/assets/bootstrap.css';

const MenuAdmin = ({actualizarBandera,Bandera,titulo}) => {

    // Extraer context de Auth
    const {cerrarSesion} = useContext(AuthContext);

    const history = useHistory();

    const Logout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "La sesión se cerrará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión'
          }).then((result) => {
            if (result.value) {
                cerrarSesion();
                history.push('/')
            }
          })
    }
    
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
                <button onClick={()=> Logout()} className="btn btn-danger ml-auto"><i className="fas fa-sign-out-alt text-white"></i></button>
            </Tooltip>
            
        </nav>
     );
}
 
export default MenuAdmin;