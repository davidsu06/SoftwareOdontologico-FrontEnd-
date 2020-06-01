import React, { useContext, useState, useEffect } from 'react';
import Servicio from './Servicio';
import servicioState from '../../context/servicios/serviciosContext';
import authState from '../../context/autenticacion/authContext';
import Pagination from '../layout/paginacion';
import { MetroSpinner } from 'react-spinners-kit';

const ListadoServicios = () => {

    const {servicios, listarServicios} = useContext(servicioState)
    const {usuario} = useContext(authState)

    const [ load, setLoad ] = useState(true);
    let loadServicios;

    useEffect(() => {
        // eslint-disable-next-line
        loadServicios = servicios;
        if (loadServicios !== undefined) {
            setLoad(false)    
        }
    }, [servicios])

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = servicios.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        listarServicios();
        // eslint-disable-next-line
    }, []);

    if (servicios.length === 0 && loadServicios !== undefined) {
        return <h3 className="text-center">No hay Servicios</h3>
    }


    return (
        <>
            <div className="col-md-11 col-sm-3">
                {servicios.length === 0
                    ? 
                    (
                        <div className="container d-flex justify-content-center mt-1"> <MetroSpinner size={100} color="#000" loading={load} /> </div>
                    ) 

                    : 
                    (
                    <div className="container d-flex justify-content-between">
                        <table className="table table-bordered mt-3">
                            <thead className="text-center">
                                {usuario && 
                                    <tr>
                                        <th scope="col">Nombre Servicio</th>
                                        <th scope="col">Valor Servicio</th>
                                        <th scope="col">Cantidad Citas</th>
                                        {usuario.cargo === 'Administrador' && <th scope="col">Acciones</th>}
                                    </tr> 
                                }    
                            </thead> 
                            
                            <tbody>
                                {usuario
                                    ? (currentPosts.map(servicio => ( 
                                        <Servicio
                                            key={servicio._id}
                                            servicio={servicio}
                                            usuario={usuario}
                                        />
                                        ))
                                    )

                                    : null
                                }
                            </tbody>
                        </table>
                    </div> 
                    )
                }                                           
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={servicios.length}
                paginate={paginate}
            />
        </>
    )
}

export default ListadoServicios
