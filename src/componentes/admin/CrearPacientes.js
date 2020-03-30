import React ,{Fragment,useState}from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearPaciente from '../pacientes/FormularioCrearPaciente';

const CrearPacientes = () => {
    const [bandera,actualizarBandera]=useState(true);
    return (  
<<<<<<< HEAD
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
=======
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
>>>>>>> 3f983c6d8a9ffc7c8414f53178e20de6812f3ed3

    );
}
 
export default CrearPacientes;