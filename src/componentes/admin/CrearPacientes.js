import React ,{Fragment,useState}from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearPaciente from '../pacientes/FormularioCrearPaciente';

const CrearPacientes = () => {
    const [bandera,actualizarBandera]=useState(true);
    return (  
        <fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Crear Paciente" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                  <FormularioCrearPaciente/>
                </div>
            </div>
          </div> 
        </fragment>

    );
}
 
export default CrearPacientes;