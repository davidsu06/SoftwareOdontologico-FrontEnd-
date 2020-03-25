import React, { Fragment, useContext, useEffect } from 'react';
import Paciente from './Paciente';
import pacienteContext from '../../context/pacientes/pacienteContext';

const ListadoPaciente = () => {

    

    // Funcion para listar pacientes

    const PacientesContext = useContext(pacienteContext);
    const {listarPacientes, pacientes} = PacientesContext;

    useEffect(() => {
         listarPacientes();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <Fragment>
            <h1> Desde ListadoPaciente </h1>
            <button type="button" 
                className="btn btn-info"
                onClick = { () => listarPacientes()}
            >Listar</button>
            
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
        </Fragment>
     );
}
 
export default ListadoPaciente;