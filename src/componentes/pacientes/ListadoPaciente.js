import React, { useContext, useState, useEffect } from 'react';
import Paciente from './Paciente';
import pacienteContext from '../../context/pacientes/pacienteContext';
import Pagination from '../layout/paginacion';
import { MetroSpinner } from 'react-spinners-kit';

const ListadoPaciente = () => {

    const PacientesContext = useContext(pacienteContext);
    const {listarPacientes, pacientes} = PacientesContext;
    const [ load, setLoad ] = useState(true);
    let loadPacientes;

    useEffect(() => {
        // eslint-disable-next-line
        loadPacientes = pacientes;
        if (loadPacientes !== undefined) {
            setLoad(false)    
        }
    }, [pacientes])

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pacientes.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    
    // Funcion para listar pacientes
    

    useEffect(() => {
         listarPacientes(); 
        // eslint-disable-next-line
    }, []);

    if (pacientes.length === 0 && loadPacientes !== undefined) {
        return <h3 className="text-center">No hay Pacientes</h3>
    }

    return ( 
        <>
            <div className="col-md-11 col-sm-3">
                
                {pacientes.length === 0
                    ? 
                    (
                        <div className="container d-flex justify-content-center mt-1"> <MetroSpinner size={100} color="#000" loading={load} /> </div>
                    ) 

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
                                    currentPosts.map(paciente => (
                                        <Paciente
                                            key={paciente._id}
                                            paciente={paciente}
                                        /> 
                                    ))
                                }
                            </tbody>
                        </table> 
                    </div> 
                    )
                }                                         
            </div>    
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={pacientes.length}
                paginate={paginate}
            />
        </>
     );
}
 
export default ListadoPaciente;

