import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../media/Logo.png';
import personaContext from '../../context/personal/personaContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NavbarAdmin = () => {

  const personalContext = useContext(personaContext);
  const { PersonaNull } = personalContext;

  const pacientesContext = useContext(pacienteContext);
  const { PacienteNull } = pacientesContext;

  const citasContext = useContext(citaContext);
  const { CitaNull } = citasContext;

  const {usuario} = useContext(AuthContext);
  let cargo;

  if(usuario){
    if(usuario.cargo){
      cargo = usuario.cargo;
    }

    else{
      cargo = 'Paciente';
    }
    
  }

  return (  
      <>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content=""/>
          <meta name="author" content=""/>
          <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        </head>

        <body>
          {/* {cargo === 'admin'
            ?
              ( */}
                <div className="menuver border-right" id="sidebar-wrapper">
                  <div className="sidebar-heading">
                    <img src={logo} alt="logo" className="Logo"></img>
                    <p>Bienvenido </p>
                  </div>

                  <div className="list-group list-group-flush menuver">
              
                    <a className="list-group-item list-group-item-action menuver " data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Gestión de pacientes
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
                      Gestión de agenda
                    </a>

                    <div className="collapse" id="collapse1">
                      <Link to={'/crear-citas'} onClick={ () => CitaNull() } className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Asignar citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar citas
                      </Link>
                    </div>  
                    
                    <a href="#" className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Gestión de personal
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
                      <Link to={'/crear-factura'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear factura
                      </Link>
                    </div>

                    <div className="collapse" id="collapse4">
                      <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar facturas
                      </Link>
                    </div>

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Historia clinica
                    </a>

                    <div className="collapse" id="collapse5">
                      <Link to={'/crear-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear historia clínica
                      </Link>
                    </div>

                    <div className="collapse" id="collapse5">
                      <Link to={'/consultar-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar historia clínica
                      </Link>
                    </div>
                  </div>
              </div>
              {/* )

            :null
          } */}

          {cargo === 'Personal' || cargo === 'Medico'
            ?
              (
                <div className="menuver border-right" id="sidebar-wrapper">
                  <div className="sidebar-heading">
                    <img src={logo} alt="logo" className="Logo"></img>
                    <p>Bienvenido {usuario.nombre}</p>
                  </div>

                  <div className="list-group list-group-flush menuver">
              
                    <a className="list-group-item list-group-item-action menuver " data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Gestión de pacientes
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
                      Gestión de agenda
                    </a>

                    <div className="collapse" id="collapse1">
                      <Link to={'/crear-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Asignar citas
                      </Link>
                    </div>

                    <div className="collapse" id="collapse1">
                      <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar citas
                      </Link>
                    </div>  

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Facturas
                    </a>

                    <div className="collapse" id="collapse4">
                      <Link to={'/crear-factura'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear factura
                      </Link>
                    </div>

                    <div className="collapse" id="collapse4">
                      <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar facturas
                      </Link>
                    </div>

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Historia clinica
                    </a>

                    <div className="collapse" id="collapse5">
                      <Link to={'/crear-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Crear historia clínica
                      </Link>
                    </div>

                    <div className="collapse" id="collapse5">
                      <Link to={'/consultar-hist-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar historia clínica
                      </Link>
                    </div>
                  </div>
              </div>
              )

            :null
          }

          {cargo === 'Paciente'
            ?
              (
                <div className="menuver border-right" id="sidebar-wrapper">
                  <div className="sidebar-heading">
                    <img src={logo} alt="logo" className="Logo"></img>
                    <p>Bienvenido {usuario.nombre}</p>
                  </div>

                  <div className="list-group list-group-flush menuver">
                    
                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                      Gestión de agenda
                    </a>

                    <div className="collapse" id="collapse1">
                      <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Asignar citas
                      </Link>
                    </div>

                    <a className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Facturas
                    </a>

                    <div className="collapse" id="collapse4">
                      <Link to={'/consultar-facturas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                        Consultar facturas
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
              )

            :null
          }

          <script src="./vendor/jquery/jquery.min.js"></script>
          <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </body>
      </>
  );
}
 
export default NavbarAdmin;