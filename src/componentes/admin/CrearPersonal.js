import React,{useState, useContext} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioCrearPersonal from '../personal/FormularioCrearPersonal';
import personaContext from '../../context/personal/personaContext';

const CrearPaciente = () => {
    const [bandera,actualizarBandera]=useState(true);
    
    const personalContext = useContext(personaContext);
    const { personalseleccionado } = personalContext;
    let tituloHead;

    if(personalseleccionado != null){
        tituloHead = "Editar Personal";
    }else{
        tituloHead = "Crear Personal";
    }

    return (  
        <>

            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={tituloHead} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <FormularioCrearPersonal/>
                </div>
            </div>
          </div> 
        </>
    );
}
 
export default CrearPaciente;