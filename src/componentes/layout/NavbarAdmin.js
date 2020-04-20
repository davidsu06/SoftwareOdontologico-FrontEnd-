import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from './../../media/Logo.png';
import personaContext from '../../context/personal/personaContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';
import facturaContext from '../../context/facturas/facturasContext';
import historiaContext from '../../context/historia/historiaContext'

const NavbarAdmin = () => {

  const personalContext = useContext(personaContext);
  const { PersonaNull } = personalContext;

  const pacientesContext = useContext(pacienteContext);
  const { PacienteNull } = pacientesContext;

  const citasContext = useContext(citaContext);
  const { CitaNull } = citasContext;

  const {HistoriaNull} = useContext(historiaContext);

  const {facturaNull} = useContext(facturaContext);

  const {usuario} = useContext(AuthContext);
  let cargo;

  if(usuario){
    cargo = usuario.cargo
  }

  // if(usuario){
  //   if(usuario.cargo){
  //     cargo = usuario.cargo;
  //   }
  // }

  return (  
      <>
        {cargo === 'Administrador'
          ?
            (
              <div className="menuver border-right negrilla" id="sidebar-wrapper">
                <div className="sidebar-heading">
                  <img src={logo} alt="logo" className="Logo"></img>
                  <p>Bienvenido {usuario.nombre}</p>
                </div>

                <div className="list-group list-group-flush menuver">
            
                  <a className="list-group-item list-group-item-action menuver " data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Gestión de Pacientes
                  </a>

                  <div className="collapse" id="collapse2">
                    <Link to={'/crear-pacientes'} onClick={ () => PacienteNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear paciente
                    </Link>
                  </div>

                  <div className="collapse" id="collapse2">
                    <Link to={'/consultar-pacientes'}  className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar paciente
                    </Link>
                  </div>
                  
                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Gestión de Agenda
                  </a>

                  <div className="collapse" id="collapse1">
                    <Link to={'/crear-citas'} onClick={ () => CitaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear Cita
                    </Link>
                  </div>

                  {/* <div className="collapse" id="collapse1">
                    <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Asignar citas
                    </Link>
                  </div> */}

                  <div className="collapse" id="collapse1">
                    <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar Citas
                    </Link>
                  </div> 

                  {/*<div className="collapse" id="collapse1">
                    <Link to={'/crear-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear historia clínica
                    </Link>
                </div>*/}

                  <div className="collapse" id="collapse1">
                    <Link to={'/consultar-hist-clinica'} onClick={ () => HistoriaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar Historial Cl.
                    </Link>
                  </div>
                  
                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Gestión de Personal
                  </a>

                  <div className="collapse" id="collapse3">
                    <Link to={'/crear-personal'} onClick={ () => PersonaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear personal
                    </Link>
                  </div>

                  <div className="collapse" id="collapse3">
                    <Link to={'/consultar-personal'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar personal
                    </Link>
                  </div>

                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Facturas
                  </a>

                  <div className="collapse" id="collapse4">
                    <Link to={'/crear-factura'} onClick={ () => facturaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear factura
                    </Link>
                  </div>

                  <div className="collapse" id="collapse4">
                    <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar facturas
                    </Link>
                  </div>

                  
                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Servicios
                  </a>

                  <div className="collapse" id="collapse6">
                    <Link to={'/crear-servicio'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear Servicios
                    </Link>
                  </div>  
                </div>
            </div>
              )

          :null
        } 

        {cargo === 'Personal' || cargo === 'Medico'
          ?
            (
              <div className="menuver border-right negrilla" id="sidebar-wrapper">
                <div className="sidebar-heading">
                  <img src={logo} alt="logo" className="Logo"></img>
                  <p>Bienvenido {usuario.nombre}</p>
                </div>

                <div className="list-group list-group-flush menuver">
            
                  <a className="list-group-item list-group-item-action menuver " data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Gestión de Pacientes
                  </a>

                  <div className="collapse" id="collapse2">
                    <Link to={'/crear-pacientes'} onClick={() => PacienteNull()} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear paciente
                    </Link>
                  </div>

                  <div className="collapse" id="collapse2">
                    <Link to={'/consultar-pacientes'}  className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar paciente
                    </Link>
                  </div>
                  
                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Gestión de Agenda
                  </a>

                  <div className="collapse" id="collapse1">
                    <Link to={'/crear-citas'} onClick={ () => CitaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear Cita
                    </Link>
                  </div>

                    <div className="collapse" id="collapse4">
                      <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar facturas
                      </Link>
                    </div>
                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Getionar Servicios
                    </a>
                    <div className="collapse" id="collapse5">
                      <Link to={'/consultar-servicio'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar servicios
                      </Link>
                    </div>
                  {/* <div className="collapse" id="collapse1">
                    <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Asignar citas
                    </Link>
                  </div> */}

                  <div className="collapse" id="collapse1">
                    <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar Citas
                    </Link>
                  </div> 

                  {/*<div className="collapse" id="collapse1">
                    <Link to={'/crear-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear historia clínica
                    </Link>
                </div>*/}

                  <div className="collapse" id="collapse1">
                    <Link to={'/consultar-hist-clinica'} onClick={ () => HistoriaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar Historial Clínico
                    </Link>
                  </div>

                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Facturas
                  </a>

                  <div className="collapse" id="collapse4">
                    <Link to={'/crear-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear factura
                    </Link>
                  </div>

                  <div className="list-group list-group-flush menuver">
                    
                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Citas
                    </a>

                    <div className="collapse" id="collapse1">
                      <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/mis-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Mis citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/mi-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Mi Historial Clínico
                      </Link>
                    </div>

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Facturas
                    </a>

                    <div className="collapse" id="collapse4">
                      <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Mis facturas
                      </Link>
                    </div>

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Historia clinica
                    </a>

                    <div className="collapse" id="collapse5">
                      <Link to={'/consultar-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar historia clínica
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
            )

          :null
        }

        {cargo === 'Paciente'
          ?
            (
              <div className="menuver border-right negrilla" id="sidebar-wrapper">
                <div className="sidebar-heading">
                  <img src={logo} alt="logo" className="Logo"></img>
                  <p>Bienvenido {usuario.nombre}</p>
                </div>

                <div className="list-group list-group-flush menuver">
                  
                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Gestión de agenda
                  </a>

                  <div className="collapse" id="collapse1">
                    <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar citas
                    </Link>
                  </div>

                  <div className="collapse" id="collapse1">
                    <Link to={'/mis-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Mis citas
                    </Link>
                  </div>

                  <div className="collapse" id="collapse1">
                    <Link to={'/mi-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Mi Historial Clínico
                    </Link>
                  </div>

                  <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Facturas
                  </a>

                  <div className="collapse" id="collapse4">
                    <Link to={'/mis-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Mis facturas
                    </Link>
                  </div>

                  <div className="collapse" id="collapse6">
                    <Link to={'/consultar-serc'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Consultar Servicios
                    </Link>
                  </div>
                </div>
              </div>
            )
            :null
        }
      </>
  );
}
 
export default NavbarAdmin;