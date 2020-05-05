import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearHistoria from '../historias/FormularioCrearHistoria';
import AuthContext from '../../context/autenticacion/authContext';
import HistoriaContext from '../../context/historia/historiaContext';

const AsignarCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    const { historiaseleccionado } = useContext(HistoriaContext);
    let tituloHead;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    if (historiaseleccionado !== null) {
        tituloHead = 'Editar Historia Clínica';
    }else{
        tituloHead = 'Crear Historia Clínica';
    }

    return (
        <>
            <div className="d-flex" id="wrapper">
            
            {bandera ?  <NavbarAdmin/> : null}
            <div id="page-content-wrapper">

                <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>

                <div className="container-fluid">

                <FormularioCrearHistoria/>

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;