import React,{useState, Fragment, useContext, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import MisFacturas from '../Facturas/MisFacturas';
import AuthContext from '../../context/autenticacion/authContext';

const ConsultarFacturas = () => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    return ( 
        <>
        <Fragment>
            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Mis Facturas" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <MisFacturas />
                </div>
            </div>
          </div> 
        </Fragment> 
        </>
     );
}
 
export default ConsultarFacturas;