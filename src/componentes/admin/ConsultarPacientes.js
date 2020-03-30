import React,{useState} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoPaciente from '../pacientes/ListadoPaciente';


const ConsultarPacientes = () => {
    const [bandera,actualizarBandera]=useState(true);
    return ( 
        <>
        <fragment>
            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Paciente" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoPaciente/>
                </div>
            </div>
          </div> 
        </fragment> 
        </>
     );
}
 
export default ConsultarPacientes;