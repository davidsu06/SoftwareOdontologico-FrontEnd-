import React,{Fragment,useState, useContext, useEffect} from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import FormularioTratamiento from '../tratamientos/formularioIniciarTratamiento';
import TratamientoContext from '../../context/tratamientos/tratamientoContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearFactura = (props) => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    const { tratamientoseleccionado } = useContext(TratamientoContext);
    let header;

    if (tratamientoseleccionado !== null) {
      header = "Editar Tratamiento"
    }

    else{
      header = "Iniciar Tratamiento"
    }

    
    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    return (  
        <Fragment>
             <div className="d-flex" id="wrapper">
               {bandera ?  <NavbarAdmin/> : null}
                <div id="page-content-wrapper">
                  <MenuAdmin titulo={header} actualizarBandera={actualizarBandera} Bandera={bandera}/>
                  <div className="container-fluid">
                    <FormularioTratamiento props={props} />
                  </div> 
                </div> 
            </div> 
            
        </Fragment>
    );
}
 
export default CrearFactura;