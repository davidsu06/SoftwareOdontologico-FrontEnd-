import React, { useContext, useState, useEffect } from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import authContext from '../../context/autenticacion/authContext';
import Factura from './Factura';
import Pagination from '../layout/paginacion';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import servicioContext from '../../context/servicios/serviciosContext';
import { MetroSpinner } from 'react-spinners-kit';

const ListadoFacturas = () => {

    // Funcion para listar pacientes
    const facturaContext = useContext(facturasContext);
    const {listarFacturas, facturas} = facturaContext;
    const {usuario} = useContext(authContext);
    const {tratamientos, listarTratamientos} = useContext(tratamientoContext);
    const {servicios, listarServicios} = useContext(servicioContext); 

    const [ load, setLoad ] = useState(true);
    let loadFacturas;

    useEffect(() => {
        // eslint-disable-next-line
        loadFacturas = facturas;
        if (loadFacturas !== undefined) {
            setLoad(false)    
        }
    }, [facturas])

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = facturas.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        listarFacturas();
        listarTratamientos();
        listarServicios();
        // eslint-disable-next-line
    }, []);

    if (facturas.length === 0 && loadFacturas !== undefined) {
        return <h3 className="text-center">No hay Facturas</h3>
    }

    return ( 
        <>                       
            <div className="col-md-11 col-sm-3">
                {facturas.length === 0
                    ? 
                    (
                        <div className="container d-flex justify-content-center mt-1"> <MetroSpinner size={100} color="#000" loading={load} /> </div>
                    ) 

                    : 
                    (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Documento Paciente</th>
                                    <th scope="col">Nombre Paciente</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Documento Médico</th>
                                    <th scope="col">Nombre Médico</th>
                                    <th scope="col">Tratamiento</th>
                                    <th scope="col">Estado Factura</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {currentPosts.map(factura => (
                                        <Factura 
                                            key={factura._id}
                                            factura={factura}
                                            usuario={usuario}
                                            tratamiento={tratamientos.filter(tratamiento => tratamiento.pacienteId === factura.documento_paciente && tratamiento.servicio === factura.tratamiento)[0]}
                                            servicio={servicios.filter( servicio => servicio.nombre_servicio === factura.tratamiento)[0]}
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
                totalPosts={facturas.length}
                paginate={paginate}
            />  
        </>
     );
}
 
export default ListadoFacturas;