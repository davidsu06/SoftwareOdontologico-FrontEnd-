import React, {useState, Fragment, useEffect, useContext} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import AuthContext from '../../context/autenticacion/authContext'
import FormularioCrearServicio from '../servicios/formularioCrearServicio';
import servicioState from '../../context/servicios/serviciosContext';

const CrearServicio = (props) => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    
    const { servicioseleccionado } = useContext(servicioState);
    let tituloHead;

    if(servicioseleccionado !== null){
        tituloHead = "Editar Servicio";
    }else{
        tituloHead = "Crear Servicio";
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
        <Fragment>
        <div className="d-flex" id="wrapper">
            {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                    <FormularioCrearServicio props={props} />
                </div>
            </div>
          </div> 
        </Fragment>
    );
}
 
export default CrearServicio;