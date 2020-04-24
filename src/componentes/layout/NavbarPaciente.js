import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from './../../media/Logo.png';
import personaContext from '../../context/personal/personaContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import citaContext from '../../context/citas/citaContext';
import facturaContext from '../../context/facturas/facturasContext';
import historiaContext from '../../context/historia/historiaContext'

const NavbarPaciente = ({usuario}) => {
    const personalContext = useContext(personaContext);
  const { PersonaNull } = personalContext;

  const pacientesContext = useContext(pacienteContext);
  const { PacienteNull } = pacientesContext;

  const citasContext = useContext(citaContext);
  const { CitaNull } = citasContext;

  const {HistoriaNull} = useContext(historiaContext);

  const {facturaNull} = useContext(facturaContext);

  return( 
    <>
      <div className="menuver border-right negrilla" id="sidebar-wrapper">
          <div className="sidebar-heading casillaesquina">
            <img src={logo} alt="logo" className="Logo"></img>
            <p>Bienvenido {usuario.nombre}</p>
          </div>

          <div className="list-group list-group-flush">   
            <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
              <i className="fas fa-calendar-alt text-white mr-2"></i>Gestión de Agenda
            </a>

            <div className="collapse subcasilla" id="collapse1">
              <Link to={'/consultar-citas'} className="d-block p-3 btn text-decoration-none text-dark">
                Consultar citas
              </Link>
            </div>

            <div className="collapse subcasilla" id="collapse1">
              <Link to={'/mis-citas'} className="d-block p-3 btn text-decoration-none text-dark">
                Mis citas
              </Link>
            </div>

            <div className="collapse subcasilla" id="collapse1">
              <Link to={'/mi-hist-clinica'} className="d-block p-3 btn text-decoration-none text-dark">
                Mi Historial Clínico
              </Link>
            </div>

            <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i className="fas fa-file-invoice-dollar text-white mr-2"></i>Facturas
            </a>

            <div className="collapse subcasilla" id="collapse4">
              <Link to={'/mis-facturas'} className="d-block p-3 btn text-decoration-none text-dark">
                Mis facturas
              </Link>
            </div>

            <a className="list-group-item list-group-item-action casilla" data-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapseExample" >
              <i className="fas fa-tooth text-white mr-2"></i>Servicios
            </a>

            <div className="collapse subcasilla" id="collapse6">
              <Link to={'/consultar-servicios'} className="d-block p-3 btn text-decoration-none text-dark">
                Consultar Servicios
              </Link>
            </div>

          </div>
      </div>
    </> 
  );
}
 
export default NavbarPaciente;