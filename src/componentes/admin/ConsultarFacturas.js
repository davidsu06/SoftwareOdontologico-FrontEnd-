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

    // Protecting component
    const styleNotAuth = {
      display: 'flex',
      padding: '1rem 0rem 2rem 1rem',
      justifyContent: 'center'
    }

    if (typeof window !== 'undefined') {
        const item = localStorage.getItem('token');
        if (!item) {
            return <h3 style={styleNotAuth}>No autorizado</h3>
        }
    }

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