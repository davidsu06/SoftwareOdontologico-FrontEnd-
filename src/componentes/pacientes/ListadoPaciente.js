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
            <NavbarGestion titulo="Consultar Pacientes"/>
            <div className="container-fluid">
                <div className="row">

                    <SidebarGestion/>
                        <div className="col-9 mt-3">
                
                            <div className="d-flex p-2">
                            
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

                            </div>
                        </div>                                        
                </div>
            </div>
            
        </>
     );
}
 
export default ListadoPaciente;