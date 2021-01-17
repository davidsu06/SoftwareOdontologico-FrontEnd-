import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import Tooltip from 'rc-tooltip';
import Swal from 'sweetalert2';

const Navbar = ({ toggle, title, setToggle }) => {
    const { cerrarSesion } = useContext(AuthContext);

    const history = useHistory();

    const Logout = () => {
        Swal.fire({
            text: "¿Deseas Cerrar la sesión actual?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión'
            }).then((result) => {
            if (result.value) {
                cerrarSesion();
                history.push('/')
            }
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navhor">
                <div className="d-flex justify-content-between align-items-center w-100 mx-2">
                    <Tooltip placement="bottomLeft" overlay={!toggle ? 'Ocultar Menú' : 'Mostrar Menú'} overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                        <button 
                            className="btn btn-outline-secondary me-3" 
                            id="menu-toggle"
                            onClick={() => setToggle(!toggle)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Tooltip>

                    <h1 className='ml-auto menuadmti'>{title}</h1>
                    <Tooltip placement="bottomRight" overlay="Cerrar Sesión" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                        <button onClick={()=> Logout()} className="btn btn-danger ml-auto"><i className="fas fa-sign-out-alt text-white"></i></button>
                    </Tooltip>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;