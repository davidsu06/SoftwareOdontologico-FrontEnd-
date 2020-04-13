import React ,{Fragment,useState, useContext, useEffect}from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearPaciente from '../pacientes/FormularioCrearPaciente';
import pacienteContext from '../../context/pacientes/pacienteContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearPacientes = () => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    const pacientesContext = useContext(pacienteContext);
    const { pacienteseleccionado } = pacientesContext;
    let tituloHead;

    if(pacienteseleccionado != null){
        tituloHead = "Editar Paciente";
    }else{
        tituloHead = "Crear Paciente";
    }

    return (  
        <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                  <FormularioCrearPaciente/>
                </div> 
                </div> 
            </div> 
        </Fragment>
            /* <NavbarGestion titulo={tituloHead}/>
            <div className="container-fluid fondo">
                <div className="row">

                    <SidebarGestion/>
                        <div className="col-9 mt-12">
                
                            <FormularioCrearPaciente/>

                        </div>                                        
                </div>
            </div> */

    );
}
 
export default CrearPacientes;