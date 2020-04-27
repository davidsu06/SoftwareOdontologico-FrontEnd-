import React, { useState, useContext, useEffect } from 'react';
import NavbarAdmin from '../layout/NavbarAdmin';
import MenuAdmin from '../layout/MenuAdmin';
import citaContext from '../../context/citas/citaContext';
import CitaPaciente from './CitaPaciente';
import AuthContext from '../../context/autenticacion/authContext';
import Pagination from '../layout/paginacion';

const MisCitas = () => {

    const [bandera,actualizarBandera]=useState(true);

    const authContext = useContext(AuthContext);
    const {  usuario, usuarioAutenticado } = authContext;
    
    
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

    return ( 
        <>

        <div className="d-flex" id="wrapper">

            {bandera ?  <NavbarAdmin/> : null}
            <div id="page-content-wrapper">

                <MenuAdmin titulo="Mis citas" actualizarBandera={actualizarBandera} Bandera={bandera}/>

                <div className="container-fluid">

                    <div className="container mt-4 col-8">

                    {
                        citasfiltradas.length === 0 
                        ? 
                        (<h3 className="text-center">No tiene ninguna cita pendiente</h3>)
                        :
                        (
                            <table className="table table-bordered">

                                <thead>
                                    
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
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

                </div>

            </div>

        </div> 
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={citasfiltradas.length}
            paginate={paginate}
         />      

        </>
     );
}
 
export default MisCitas;