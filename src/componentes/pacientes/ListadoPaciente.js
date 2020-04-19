import React, { useContext, useEffect } from 'react';
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
        <>
            <div className="col-md-11 col-sm-3">
                {pacientes.length === 0
                    ? 
                    (<h3 className="text-center">No hay Pacientes</h3>) 

                    : 
                    (
                    <div className="container d-flex justify-content-between">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Documento</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Fecha Nac</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    pacientes.map(paciente => (
                                        <tr>
                                            <Paciente
                                                key={paciente._id}
                                                paciente={paciente}
                                            />
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> 
                    )
                }                                         
            </div>    
        </>
     );
}
 
export default ListadoPaciente;

