import React, { useContext } from 'react';
import authContext from '../../context/autenticacion/authContext';

import MenuAdmin from './menu/MenuAdmin';
import MenuPersonal from './menu/MenuPersonal';
import MenuPaciente from './menu/MenuPaciente';
import logo from '../../assets/img/Logo.png';

const SideBar = () => {
  const { usuario } = useContext(authContext);

  const mostrarMenuUsuario = () => {
    if (usuario?.cargo === 'Administrador')
      return <MenuAdmin />

    else if (usuario?.cargo === 'Personal' || usuario?.cargo === 'Medico')
      return <MenuPersonal />

    else 
      return <MenuPaciente />
  };

  return (
    <div className="menuver" id="sidebar-wrapper">
      <div className="sidebar-heading text-light fw-bold text-center" style={{ fontSize: '22px' }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={logo} alt="logo" className="Logo"></img>
          <p>Bienvenido {usuario?.nombre.split(" ", 1)}</p>
        </div>
      </div>

      {mostrarMenuUsuario()}
    </div>
  );
};

export default SideBar;
