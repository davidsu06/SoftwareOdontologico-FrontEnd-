import React, {useState, Fragment} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearServicio from '../servicios/formularioCrearServicio';
const CrearServicio = () => {
    const [bandera,actualizarBandera]=useState(true);
    return (  
        <Fragment>
        <div className="d-flex" id="wrapper">
            {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={"Crear Servicio"} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                    <FormularioCrearServicio/>
                </div>
            </div>
          </div> 
        </Fragment>
    );
}
 
export default CrearServicio;