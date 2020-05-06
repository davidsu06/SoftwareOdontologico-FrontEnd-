import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoTratamientos from '../tratamientos/ListadoTratamientos';
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

                <MenuAdmin titulo="Consultar Tratamientos" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                    <div className="container-fluid">
                        <ListadoTratamientos/>
                    </div>
            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;