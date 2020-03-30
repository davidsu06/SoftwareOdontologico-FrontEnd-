import React,{useState} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearPersonal from '../personal/FormularioCrearPersonal';
const CrearPaciente = () => {
    const [bandera,actualizarBandera]=useState(true);
    return (  
        <fragment>
            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Crear Personal" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <FormularioCrearPersonal/>
                </div>
            </div>
          </div> 
        </fragment>
    );
}
 
export default CrearPaciente;