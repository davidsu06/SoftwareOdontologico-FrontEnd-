import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearHistoria from '../historias/FormularioCrearHistoria';
import AuthContext from '../../context/autenticacion/authContext';
import HistoriaContext from '../../context/historia/historiaContext';

const AsignarCitas = (props) => {

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

                <FormularioCrearHistoria props={props} />

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;