import React,{useState, Fragment} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import ListadoCita from '../citas/ListadoCita';

const ConsultarPersonal = () => {
    const [bandera,actualizarBandera]=useState(true);

    return ( 
        <>
            <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="Consultar Citas" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid">
                <ListadoCita/>
                </div>
            </div>
          </div> 
        </Fragment>
        </>

     );
}
 
export default ConsultarPersonal;