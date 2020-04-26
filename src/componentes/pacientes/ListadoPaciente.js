import React, { useContext, useState, useEffect } from 'react';
import Paciente from './Paciente';
import pacienteContext from '../../context/pacientes/pacienteContext';
import Pagination from '../layout/paginacion';

const ListadoPaciente = () => {

    const PacientesContext = useContext(pacienteContext);
    const {listarPacientes, pacientes} = PacientesContext;

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

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
                                    currentPosts.map(paciente => (
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
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={pacientes.length}
                paginate={paginate}
            />
        </>
     );
}
 
export default ListadoPaciente;

