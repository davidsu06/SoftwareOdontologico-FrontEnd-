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
    return ( <>
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
                Gestion de Facturas
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
    
    </> );
}
 
export default NavbarPaciente;