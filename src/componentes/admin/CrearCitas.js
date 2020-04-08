import React, { useState, useEffect, useContext } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import citaContext from '../../context/citas/citaContext';
import FormularioCrearCita from '../citas/FormularioCrearCita';

const CrearCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const citasContext = useContext(citaContext);
    const { citaseleccionada } = citasContext;
    let tituloHead;

    if (citaseleccionada != null) {
        tituloHead = 'Editar Cita'
    }else{
        tituloHead = 'Crear Cita'
    }

    return ( 
        <>
            <div className="d-flex" id="wrapper">

               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">

                    <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>

                    <div className="container-fluid">

                    <FormularioCrearCita/>

                    </div>

                </div>

            </div> 
        </>
     );
}
 
export default CrearCitas;