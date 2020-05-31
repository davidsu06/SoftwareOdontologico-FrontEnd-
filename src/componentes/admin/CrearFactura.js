import React,{Fragment,useState, useContext, useEffect} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioFacturas from '../Facturas/FormularioFacturas';
import AuthContext from '../../context/autenticacion/authContext';

const CrearFactura = (props) => {

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
        <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={"Crear Factura"} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                  <div className="container-fluid">
                    <FormularioFacturas props={props} />
                  </div> 
                </div> 
            </div> 
            
        </Fragment>
    );
}
 
export default CrearFactura;