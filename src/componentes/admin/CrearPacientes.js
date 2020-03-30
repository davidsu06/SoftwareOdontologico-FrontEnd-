import React ,{Fragment}from 'react';
import FormularioCrearPaciente from '../pacientes/FormularioCrearPaciente';
import NavbarGestion from '../layout/NavbarGestion';
import SidebarGestion from '../layout/SidebarGestion';
const CrearPacientes = () => {
    return (  
        <Fragment>
            
            <NavbarGestion titulo="Crear Pacientes"/>
            <div className="container-fluid fondo">
                <div className="row">

                    <SidebarGestion/>
                        <div className="col-9 mt-12">
                
                            <FormularioCrearPaciente/>

                        </div>                                        
                </div>
            </div>
        

        </Fragment>

    );
}
 
export default CrearPacientes;