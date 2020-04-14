import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import MisHistorias from '../historias/MisHistorias';
import AuthContext from '../../context/autenticacion/authContext';

const MiHistorial = () => {

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

                <MenuAdmin titulo="Mi Historial Clínico" actualizarBandera={actualizarBandera} Bandera={bandera}/>

                <div className="container-fluid">

                <MisHistorias/>

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default MiHistorial;