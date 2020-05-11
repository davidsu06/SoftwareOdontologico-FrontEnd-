import React,{useState, Fragment, useContext, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoFacturas from '../Facturas/ListadoFacturas';
import AuthContext from '../../context/autenticacion/authContext';

const ConsultarFacturas = (props) => {
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
               {bandera ?  <NavbarAdmin /> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Facturas" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoFacturas/>
                </div>
            </div>
          </div> 
        </Fragment> 
        </>
     );
}
 
export default ConsultarFacturas;