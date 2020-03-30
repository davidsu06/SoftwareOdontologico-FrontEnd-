import React, { useContext, useEffect } from 'react';
import Paciente from './Paciente';
import pacienteContext from '../../context/pacientes/pacienteContext';
import NavbarGestion from '../layout/NavbarGestion';
import SidebarGestion from '../layout/SidebarGestion';

const ListadoPaciente = () => {

    

    // Funcion para listar pacientes

    const PacientesContext = useContext(pacienteContext);
    const {listarPacientes, pacientes} = PacientesContext;

    useEffect(() => {
         listarPacientes();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <>
            <ul className="listado-list">
                {pacientes.length === 0
                ? (<li className="list"><p>No hay pacientes</p></li>)
                : pacientes.map(paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                    />
                                    ))
                                }
            </ul>                                       
            
        </>
     );
}
 
export default ListadoPaciente;