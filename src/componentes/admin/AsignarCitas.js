import React, { useContext, useState } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioAsignarCita from '../citas/FormularioAsignarCita';

const AsignarCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    return (
        <>
            <div className="d-flex" id="wrapper">

            {bandera ?  <NavbarAdmin/> : null}
            <div id="page-content-wrapper">

                <MenuAdmin titulo="Asignar Cita" actualizarBandera={actualizarBandera} Bandera={bandera}/>

                <div className="container-fluid">

                <FormularioAsignarCita/>

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;