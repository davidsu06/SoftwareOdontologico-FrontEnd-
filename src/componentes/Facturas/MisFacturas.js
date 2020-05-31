import React, { useContext, useState, useEffect } from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import AuthContext from '../../context/autenticacion/authContext';
import Factura from './Factura';
import Pagination from '../layout/paginacion';

const MisFacturas = () => {

    // Funcion para listar pacientes

    const facturaContext = useContext(facturasContext);
    const {facturas, listarFacturas} = facturaContext;
    const {usuario} = useContext(AuthContext)
    let MisFacturas;

    useEffect(() => {
        listarFacturas();   
        // eslint-disable-next-line
    }, []);

    if(usuario){
        MisFacturas = facturas.filter(factura => factura.documento_paciente === usuario.documento)
    }
    else{
        MisFacturas = [];
    }

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = MisFacturas.slice(indexOfFirstPost, indexOfLastPost);

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
        <div className="col-md-11 col-sm-3">

            {MisFacturas.length === 0
                ? 
                    (<h3 className="text-center">No hay Facturas</h3>) 

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
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    currentPosts.map(factura => (
                                        <Factura 
                                            key={factura._id}
                                            factura={factura}
                                            usuario={usuario}
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
                totalPosts={MisFacturas.length}
                paginate={paginate}
            />
        </>
     );
}
 
export default MisFacturas;