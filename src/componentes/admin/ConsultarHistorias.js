import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoHistorias from '../historias/ListadoHistorias';
import AuthContext from '../../context/autenticacion/authContext';

const AsignarCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
      }, [])

    return (
        <>
            <div className="d-flex" id="wrapper">

            {bandera ?  <NavbarAdmin/> : null}
            <div id="page-content-wrapper">

                <MenuAdmin titulo="Consultar Historial Clínico" actualizarBandera={actualizarBandera} Bandera={bandera}/>

                <div className="container-fluid">

                <ListadoHistorias/>

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;