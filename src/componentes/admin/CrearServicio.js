import React, {useState, Fragment, useEffect, useContext} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import AuthContext from '../../context/autenticacion/authContext'
import FormularioCrearServicio from '../servicios/formularioCrearServicio';
const CrearServicio = () => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    return (  
        <Fragment>
        <div className="d-flex" id="wrapper">
            {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={"Crear Servicio"} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                    <FormularioCrearServicio/>
                </div>
            </div>
          </div> 
        </Fragment>
    );
}
 
export default CrearServicio;