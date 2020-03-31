import React,{useState, Fragment} from 'react';
import NavbarAdmin from './NavbarAdmin';
import MenuAdmin from './MenuAdmin';


const InterfazAdmin = () => {
    const [bandera,actualizarBandera]=useState(true);

    return ( 
        <>
        <Fragment>
            <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo="" actualizarBandera={actualizarBandera} Bandera={bandera}/>
                <div className="container-fluid"></div>
            </div>
          </div> 
        </Fragment> 
        </>
     );
}
 
export default InterfazAdmin;