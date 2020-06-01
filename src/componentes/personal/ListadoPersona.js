import React, { useContext, useState, useEffect } from 'react';
import Persona from './Persona';
import personaContext from '../../context/personal/personaContext';
import Pagination from '../layout/paginacion';
import { MetroSpinner } from 'react-spinners-kit';

const ListadoPersona = () => {

    const personalContext = useContext(personaContext);
    const {listarPersonal, personal} = personalContext;

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = personal.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Funcion para listar personas

    const [ load, setLoad ] = useState(true);
    let loadPersonal;

    useEffect(() => {
        // eslint-disable-next-line
        loadPersonal = personal;
        if (loadPersonal !== undefined) {
            setLoad(false)    
        }
    }, [personal])

    useEffect(() => {
         listarPersonal();   
        // eslint-disable-next-line
    }, []);

    if (personal.length === 0 && loadPersonal !== undefined) {
        return <h3 className="text-center">No hay Personal</h3>
    }

    return ( 
        <> 
            <div className="col-md-11 col-sm-3">
                {personal.length === 0
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
                                    currentPosts.map(persona => (
                                            <Persona
                                                key={persona._id}
                                                persona={persona}
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
                totalPosts={personal.length}
                paginate={paginate}
            />
        </>
     );
}
 
export default ListadoPersona;

