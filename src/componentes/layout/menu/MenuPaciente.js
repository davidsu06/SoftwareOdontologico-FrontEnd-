import React from 'react';
import { Link } from 'react-router-dom';

const MenuPaciente = () => {
  return (
    <div className="list-group list-group-flush">   
      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" >
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

      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className="fas fa-file-invoice-dollar text-white mr-2"></i>Facturas
      </a>

      <div className="collapse subcasilla" id="collapse4">
        <Link to={'/mis-facturas'} className="d-block p-3 btn text-decoration-none text-dark">
          Mis facturas
        </Link>
      </div>

      <a className="list-group-item list-group-item-action casilla py-3" data-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapseExample" >
        <i className="fas fa-tooth text-white mr-2"></i>Servicios
      </a>

      <div className="collapse subcasilla" id="collapse6">
        <Link to={'/consultar-servicios'} className="d-block p-3 btn text-decoration-none text-dark">
          Consultar Servicios
        </Link>
      </div>

    </div>
  );
}

export default MenuPaciente;
