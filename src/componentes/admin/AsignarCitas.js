import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioAsignarCita from '../citas/FormularioAsignarCita';
import AuthContext from '../../context/autenticacion/authContext';

const AsignarCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

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