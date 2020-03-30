import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../media/Logo.png';

const NavbarAdmin = () => {

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

       

          <div className="menuver border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
            <img src={logo} alt="logo" className="Logo"></img>
              <p>Bienvenido Jeferson</p>
            </div>
            <div className="list-group list-group-flush menuver">
               
              
              <a className="list-group-item list-group-item-action menuver " data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                Gestión de pacientes
              </a>
              <div className="collapse" id="collapse2">
                <Link to={'/crear-pacientes'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
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
              
              <a href="#" className="list-group-item list-group-item-action menuver" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                Gestión de personal
              </a>

              <div className="collapse" id="collapse3">
                <Link to={'/crear-personal'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
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
        
        <script src="./vendor/jquery/jquery.min.js"></script>
        <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </body>
        </>
    );
}
 
export default NavbarAdmin;