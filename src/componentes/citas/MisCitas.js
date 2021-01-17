import React, { useState, useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import citaContext from '../../context/citas/citaContext';
import CitaPaciente from './CitaPaciente';
import AuthContext from '../../context/autenticacion/authContext';
import Pagination from '../layout/paginacion';

const MisCitas = () => {
    const {  usuario, usuarioAutenticado } = useContext(AuthContext);
    
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    const citasContext = useContext(citaContext);
    const { listarCitasPaciente, citasfiltradas } = citasContext;

    useEffect(() => {
        if (usuario != null) {
            listarCitasPaciente(usuario.documento)
        }
        // eslint-disable-next-line
    }, [usuario])

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = citasfiltradas.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Protecting component
    const styleNotAuth = {
        display: 'flex',
        padding: '1rem 0rem 2rem 1rem',
        justifyContent: 'center'
      }
  
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem('token');
        if (!item) {
            return <h3 style={styleNotAuth}>No autorizado</h3>
        }
    }

    return ( 
        <Layout title='Mis citas'>
            <div className="container mt-4 col-8">
            {citasfiltradas.length === 0 
                ? 
                (<h3 className="text-center">No tiene ninguna cita pendiente</h3>)
                :
                (
                    <table className="table table-bordered">

                        <thead>
                            
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Tipo Cita</th>
                                <th scope="col" className="text-center">Acciones</th>
                            </tr>

                        </thead>

                        <tbody>

                                {
                                currentPosts.map( citafiltrada => (
                                    <CitaPaciente 
                                        key={citafiltrada._id}
                                        cita={citafiltrada}
                                    />
                                ))
                                }
                        

                        </tbody>

                    </table>
                )
            }
            </div>

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={citasfiltradas.length}
                paginate={paginate}
            />      

        </Layout>
    );
};
 
export default MisCitas;