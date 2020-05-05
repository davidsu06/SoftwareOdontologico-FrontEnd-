import React, { useContext, useState, useEffect } from 'react';
import Tratamiento from './Tratamiento';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Pagination from '../layout/paginacion';

const ListadoServicios = () => {

    const { tratamientos, listarTratamientos } = useContext(tratamientoContext)


    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = tratamientos.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        listarTratamientos();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="col-md-11 col-sm-3">
                {tratamientos.length === 0
                    ? 
                    (<h3 className="text-center">No hay Tratamientos</h3>) 

                    : 
                    (
                    <div className="container d-flex justify-content-between">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Documento Paciente</th>
                                    <th scope="col">Nombre Paciente</th>
                                    <th scope="col">Nombre Servicio</th>
                                    <th scope="col">Citas Realizadas</th>
                                    <th scope="col">Estado Tratamiento</th>
                                    <th scope="col">Cuotas Establecidas</th>
                                    <th scope="col">Saldo Abonado</th>
                                    <th scope="col" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {currentPosts.map(tratamiento => ( 
                                        <Tratamiento
                                            key={tratamiento._id}
                                            tratamiento={tratamiento}
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
                totalPosts={tratamientos.length}
                paginate={paginate}
            />
        </>
    )
}

export default ListadoServicios
