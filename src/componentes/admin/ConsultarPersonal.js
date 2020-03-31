import React,{useState} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoPersona from '../personal/ListadoPersona';

const ConsultarPersonal = () => {
    const [bandera,actualizarBandera]=useState(true);

    return ( 
        <>
            <fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Personal" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoPersona/>
                </div>
            </div>
          </div> 
        </fragment>
        </>

     );
}
 
export default ConsultarPersonal;