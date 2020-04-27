import React, { useContext, useState, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioAsignarCita from '../citas/FormularioAsignarCita';
import AuthContext from '../../context/autenticacion/authContext';

const AsignarCitas = (props) => {

    const [bandera,actualizarBandera]=useState(true);
    const [ redirect, actualizarRedirect ] = useState(false)


    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {

      if(redirect) props.history.push('/consultar-citas')  
      // eslint-disable-next-line
    }, [redirect])

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

                  <FormularioAsignarCita redireccion={ actualizarRedirect }/>

                </div>

            </div>

            </div> 
        </>
      );
}
 
export default AsignarCitas;