import React, { useState, useContext, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import citaContext from '../../context/citas/citaContext';
import FormularioCrearCita from '../citas/FormularioCrearCita';
import AuthContext from '../../context/autenticacion/authContext';

const CrearCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    const citasContext = useContext(citaContext);
    const { citaseleccionada } = citasContext;
    let tituloHead;

    if (citaseleccionada != null) {
        tituloHead = 'Editar Cita'
    }else{
        tituloHead = 'Crear Cita'
    }

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