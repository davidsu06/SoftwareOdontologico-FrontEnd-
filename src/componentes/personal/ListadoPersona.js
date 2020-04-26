import React, { useContext, useState, useEffect } from 'react';
import Persona from './Persona';
import personaContext from '../../context/personal/personaContext';
import Pagination from '../layout/paginacion';
const ListadoPersona = () => {

    const personalContext = useContext(personaContext);
    const {listarPersonal, personal} = personalContext;

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = personal.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Funcion para listar personas

    

    useEffect(() => {
         listarPersonal();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <> 
            <div className="col-md-11 col-sm-3">
                {personal.length === 0
                    ? 
                    (<h3 className="text-center">No hay Personal</h3>) 

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
                                    currentPosts.map(persona => (
                                        <tr>
                                            <Persona
                                                key={persona._id}
                                                persona={persona}
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
                totalPosts={personal.length}
                paginate={paginate}
            />
        </>
     );
}
 
export default ListadoPersona;

