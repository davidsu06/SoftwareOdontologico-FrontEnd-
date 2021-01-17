import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import personaContext from '../../../context/personal/personaContext';
import pacienteContext from '../../../context/pacientes/pacienteContext';
import citaContext from '../../../context/citas/citaContext';
import facturaContext from '../../../context/facturas/facturasContext';
import historiaContext from '../../../context/historia/historiaContext'
import servicioContext from '../../../context/servicios/serviciosContext';
import tratamientoContext from '../../../context/tratamientos/tratamientoContext';

const MenuAdmin = () => {
  const { PersonaNull } = useContext(personaContext);
  const { PacienteNull } = useContext(pacienteContext);
  const { CitaNull } = useContext(citaContext);
  const {HistoriaNull} = useContext(historiaContext);
  const {facturaNull} = useContext(facturaContext);
  const {ServicioNull} = useContext(servicioContext);
  const {tratamientoNull} = useContext(tratamientoContext);

  return (
    <div className="list-group list-group-flush">
      <a className="list-group-item list-group-item-action casilla py-3" id="gestionPacienteq" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
        <i className="fas fa-user-alt text-white mr-2"></i>Gestión de Pacientes
      </a>

      <div className="collapse subcasilla" id="collapse1">
        <Link to='/crear-pacientes' id="crearPaciente" onClick={ () => PacienteNull() } className="d-block p-3 btn border-bottom-dark text-decoration-none text-dark">
          Crear paciente
        </Link>
      </div>

      <div className="collapse subcasilla" id="collapse1">
        <Link to='/consultar-pacientes' id="consultarPaciente" className="d-block p-3 btn text-decoration-none">
          Consultar paciente
        </Link>
      </div>

      <a className="list-group-item list-group-item-action casilla py-3" id="gestionTratamientos" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
        <i className="fas fa-clinic-medical mr-2"></i>Gestión Tratamientos
      </a>

      <div className="collapse subcasilla" id="collapse2">
        <Link to={'/iniciar-tratamiento'} id="iniciarTratamiento" onClick={ () => tratamientoNull() } className="d-block p-3 btn border-bottom-dark text-decoration-none text-dark">
          Iniciar tratamiento
        </Link>
      </div>

      <div className="collapse subcasilla" id="collapse2">
        <Link to={'/consultar-tratamientos'} id="consultarTratamiento" className="d-block p-3 btn text-decoration-none">
          Consultar tratamientos
        </Link>
      </div>

      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" >
        <i className="fas fa-calendar-alt text-white mr-2"></i>Gestión de Agenda
      </a>

      <div className="collapse subcasilla" id="collapse3">
        <Link to={'/crear-citas'} onClick={ () => CitaNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Crear Cita
        </Link>
      </div>

      <div className="collapse subcasilla" id="collapse3">
        <Link to={'/consultar-citas'} className="d-block p-3 btn text-decoration-none text-dark">
          Consultar Citas
        </Link>
      </div> 

      <div className="collapse subcasilla" id="collapse3">
        <Link to={'/consultar-hist-clinica'} onClick={ () => HistoriaNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Consultar Historial Cl.
        </Link>
      </div>
      
      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className="fas fa-user-shield text-white mr-2"></i>Gestión de Personal
      </a>

      <div className="collapse subcasilla" id="collapse4">
        <Link to={'/crear-personal'} onClick={ () => PersonaNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Crear personal
        </Link>
      </div>

      <div className="collapse subcasilla" id="collapse4">
        <Link to={'/consultar-personal'} className="d-block p-3 btn text-decoration-none text-dark">
          Consultar personal
        </Link>
      </div>

      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className="fas fa-file-invoice-dollar text-white mr-2"></i>Gestion de Facturas
      </a>

      <div className="collapse subcasilla" id="collapse5">
        <Link to={'/crear-factura'} onClick={ () => facturaNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Crear factura
        </Link>
      </div>

      <div className="collapse subcasilla text-center" id="collapse5">
        <Link to={'/consultar-facturas'} onClick={ () => facturaNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Consultar facturas
        </Link>
      </div>
      
      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapseExample" >
        <i className="fas fa-tooth text-white mr-2"></i>Gestion de Servicios
      </a>

      <div className="collapse subcasilla" id="collapse6">
        <Link to={'/crear-servicio'} onClick={ () => ServicioNull() } className="d-block p-3 btn text-decoration-none text-dark">
          Crear Servicio
        </Link>
      </div>  

      <div className="collapse subcasilla" id="collapse6">
        <Link to={'/consultar-servicios'} className="d-block p-3 btn text-decoration-none text-dark">
          Consultar Servicios
        </Link>
      </div>
    </div>
  )
}

export default MenuAdmin
