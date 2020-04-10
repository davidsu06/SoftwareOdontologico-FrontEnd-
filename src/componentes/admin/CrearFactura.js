import React,{Fragment,useState} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioFacturas from '../Facturas/FormularioFacturas';
const CrearFactura = () => {
    const [bandera,actualizarBandera]=useState(true);
    return (  
        <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={"Crear Factura"} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                  <FormularioFacturas/>
                </div> 
                </div> 
            </div> 
        </Fragment>
    );
}
 
export default CrearFactura;