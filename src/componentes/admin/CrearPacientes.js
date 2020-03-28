import React ,{Fragment}from 'react';
import FormularioCrearPacientes from '../pacientes/FormularioCrearPacientes';
import NavbarGestion from '../layout/NavbarGestion';
import SidebarGestion from '../layout/SidebarGestion';
const CrearPacientes = () => {
    return (  
        <fragment>
            <NavbarGestion titulo="Crear Pacientes"/>
            <div className="container-fluid">
                <div className="row">

                    <SidebarGestion/>
                        <div className="col-9 mt-12">
                
                            <FormularioCrearPacientes/>

                        </div>                                        
                </div>
            </div>
        

        </fragment>

    );
}
 
export default CrearPacientes;