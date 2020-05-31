import React, { useContext, useState, useEffect } from 'react';
import historiaContext from '../../context/historia/historiaContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import authContext from '../../context/autenticacion/authContext';
import Historia from './Historia';
import img1 from '../../media/Logo.png';
import Pagination from '../layout/paginacion';

const ListadoHistorias = () => {

    const {historias, listarHistoria} = useContext(historiaContext);
    const {tratamientos, listarTratamientos} = useContext(tratamientoContext);
    const {usuario} = useContext(authContext);
    let historiasPaciente;
    
    useEffect(() => {
        listarHistoria();
        listarTratamientos();
        // eslint-disable-next-line
    }, [])

    if(usuario){
        historiasPaciente = historias.filter(historia => historia.pacienteId === usuario.documento);
    }
    else{
        historiasPaciente = [];
    }
    
    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = historiasPaciente.slice(indexOfFirstPost, indexOfLastPost);

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
        <>
        <div className="col-md-11 col-sm-3 mt-5">
            <div className="card">
                <div className="card-header">
                    {usuario
                        ?
                        (
                            <div className="row">
                                <div className="col">
                                    <p> <b>Nombre:</b> {usuario.nombre} {usuario.apellido}</p>
                                    <p> <b>Documento:</b> {usuario.documento}</p>
                                    <p> <b>Teléfono:</b> {usuario.telefono}</p>
                                    <p> <b>Dirección:</b> {usuario.direccion}</p>
                                    <p> <b>Tratamiento Actual:</b> {tratamientos.filter(tratamiento => tratamiento.pacienteId === usuario.documento && tratamiento.estado !== 'Finalizado')[0].servicio} </p>
                                </div>

                                <div className="col">
                                    <img src={img1} className="w-25 mt-3" alt="Logo" style={{float:'right'}} /> 
                                </div>  
                            </div>

                            
                        )

                        :null
                    }
                </div>
                
                <div className="card-body">
                    {historiasPaciente.length === 0
                        ? (<h3 className="text-center">No tienes Historias clínicas disponibles</h3>) 

                        : (
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        <th scope="col">Documento Médico</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Tratamiento</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    {
                                        currentPosts.map(historia => (
                                            <Historia
                                                key={historia._id}
                                                historia={historia}
                                                usuario={usuario}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        )   
                    }

                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={historiasPaciente.length}
                        paginate={paginate}
                    />

                </div>

                <div className="card-footer text-center">
                    <h5 className=""><b>Historia Clínica</b></h5>
                </div>

            </div>
        </div>
        
        </>
     );
}
 
export default ListadoHistorias;