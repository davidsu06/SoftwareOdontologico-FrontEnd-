import React,{useState, Fragment, useContext, useEffect} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import AuthContext from '../../context/autenticacion/authContext';

const InterfazAdmin = () => {
    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

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