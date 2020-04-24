import React, { useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import NavbarAdministrador from './NavbarAdministrador';
import NavbarPaciente from './NavbarPaciente';
import NavbarPersMed from './NavbarPersMed';

const NavbarAdmin = () => {

  const {usuario} = useContext(AuthContext);
  let cargo;

  if(usuario){
    cargo = usuario.cargo
  }

  return (  
      <>
        {cargo === 'Administrador'
          ?
            <NavbarAdministrador usuario={usuario}/>

          :null
        } 

        {cargo === 'Personal' || cargo === 'Medico'
          ?
            <NavbarPersMed usuario={usuario}/>

          :null
        }

        {cargo === 'Paciente'
          ?
          <NavbarPaciente usuario={usuario}/>
            :null
        }
      </>
  );
}
 
export default NavbarAdmin;