import React,{useState, Fragment, useContext, useEffect} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoPersona from '../personal/ListadoPersona';
import AuthContext from '../../context/autenticacion/authContext';

const ConsultarPersonal = () => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
    }, [])

    return ( 
        <>
            <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Personal" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoPersona/>
                </div>
            </div>
          </div> 
        </Fragment>
        </>

     );
}
 
export default ConsultarPersonal;