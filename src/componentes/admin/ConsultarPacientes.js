import React,{useState, Fragment} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoPaciente from '../pacientes/ListadoPaciente';


const ConsultarPacientes = () => {
    const [bandera,actualizarBandera]=useState(true);

    return ( 
        <>
        <Fragment>
            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Pacientes" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoPaciente/>
                </div>
            </div>
          </div> 
        </Fragment> 
        </>
     );
}
 
export default ConsultarPacientes;