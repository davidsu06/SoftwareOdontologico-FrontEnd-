import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from './../../media/Logo.png';
import personaContext from '../../context/personal/personaContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import citaContext from '../../context/citas/citaContext';
import facturaContext from '../../context/facturas/facturasContext';
import historiaContext from '../../context/historia/historiaContext'
const NavbarAdministrador = ({usuario}) => {
    const personalContext = useContext(personaContext);
  const { PersonaNull } = personalContext;

  const pacientesContext = useContext(pacienteContext);
  const { PacienteNull } = pacientesContext;

  const citasContext = useContext(citaContext);
  const { CitaNull } = citasContext;

  const {HistoriaNull} = useContext(historiaContext);

  const {facturaNull} = useContext(facturaContext);
    return ( <>
              <div className="menuver border-right negrilla" id="sidebar-wrapper">
                <div className="sidebar-heading casillaesquina">
                  <img src={logo} alt="logo" className="Logo"></img>
                  <p>Bienvenido {usuario.nombre}</p>
                </div>

                <div className="list-group list-group-flush">
            
                  <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                  <i className="fas fa-user-alt text-white"></i>   Gestión de Pacientes
                  </a>
                  <div className="collapse subcasilla" id="collapse2">
                    <Link to={'/crear-pacientes'} onClick={ () => PacienteNull() } className="d-block p-3 btn border-bottom-dark text-decoration-none text-dark">
                      Crear paciente
                    </Link>
                  </div>

                  <div className="collapse subcasilla" id="collapse2">
                    <Link to={'/consultar-pacientes'}  className="d-block p-3 btn text-decoration-none">
                      Consultar paciente
                    </Link>
                  </div>
                  
                  <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                  <i className="fas fa-calendar-alt text-white"></i>   Gestión de Agenda
                  </a>

                  <div className="collapse subcasilla" id="collapse1">
                    <Link to={'/crear-citas'} onClick={ () => CitaNull() } className="d-block p-3 btn text-decoration-none text-dark">
                      Crear Cita
                    </Link>
                  </div>

                  {/* <div className="collapse" id="collapse1">
                    <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Asignar citas
                    </Link>
                  </div> */}

                  <div className="collapse subcasilla" id="collapse1">
                    <Link to={'/consultar-citas'} className="d-block p-3 btn text-decoration-none text-dark">
                      Consultar Citas
                    </Link>
                  </div> 

                  {/*<div className="collapse" id="collapse1">
                    <Link to={'/crear-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                      Crear historia clínica
                    </Link>
                </div>*/}

                  <div className="collapse subcasilla" id="collapse1">
                    <Link to={'/consultar-hist-clinica'} onClick={ () => HistoriaNull() } className="d-block p-3 btn text-decoration-none text-dark">
                      Consultar Historial Cl.
                    </Link>
                  </div>
                  
                  <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <i className="fas fa-user-shield text-white"></i>   Gestión de Personal
                  </a>

                  <div className="collapse subcasilla" id="collapse3">
                    <Link to={'/crear-personal'} onClick={ () => PersonaNull() } className="d-block p-3 btn text-decoration-none text-dark">
                      Crear personal
                    </Link>
                  </div>

                  <div className="collapse subcasilla" id="collapse3">
                    <Link to={'/consultar-personal'} className="d-block p-3 btn text-decoration-none text-dark">
                      Consultar personal
                    </Link>
                  </div>

                  <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <i className="fas fa-file-invoice-dollar text-white"></i>   Gestion de Facturas
                  </a>

                  <div className="collapse subcasilla" id="collapse4">
                    <Link to={'/crear-factura'} onClick={ () => facturaNull() } className="d-block p-3 btn text-decoration-none text-dark">
                      Crear factura
                    </Link>
                  </div>

                  <div className="collapse subcasilla" id="collapse4">
                    <Link to={'/consultar-facturas'} className="d-block btn p-3 text-decoration-none text-dark">
                      Consultar facturas
                    </Link>
                  </div>

                  
                  <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapseExample" >
                  <i className="fas fa-tooth text-white"></i>   Gestion de Servicios
                  </a>

                  <div className="collapse subcasilla" id="collapse6">
                    <Link to={'/crear-servicio'} className="d-block p-3 btn text-decoration-none text-dark">
                      Crear Servicios
                    </Link>
                  </div>  
                </div>
            </div>
    </>
    )
}
 
export default NavbarAdministrador;