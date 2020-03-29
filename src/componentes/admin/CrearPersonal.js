import React from 'react';
import NavbarGestion from '../layout/NavbarGestion';
import SidebarGestion from '../layout/SidebarGestion';
import FormularioCrearPersonal from '../personal/FormularioCrearPersonal';
const CrearPaciente = () => {
    return (  
        <fragment>
            
            <NavbarGestion titulo="Crear Personal"/>
            <div className="container-fluid fondo">
                <div className="row">

                    <SidebarGestion/>
                        <div className="col-9 mt-12">
                
                            <FormularioCrearPersonal/>

                        </div>                                        
                </div>
            </div>
        </fragment>
    );
}
 
export default CrearPaciente;