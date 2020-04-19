import React, { useContext, useEffect } from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import Factura from './Factura';

const ListadoFacturas = () => {
    // Funcion para listar pacientes

    const facturaContext = useContext(facturasContext);
    const {listarFacturas, facturas} = facturaContext;

    useEffect(() => {
        listarFacturas();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <>                       
            <div className="col-md-11 col-sm-3">
                {facturas.length === 0
                    ? 
                    (<h3 className="text-center">No hay Facturas</h3>) 

                    : 
                    (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Documento Paciente</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Documento Médico</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    facturas.map(factura => (
                                        <tr>
                                            <Factura 
                                                key={factura._id}
                                                factura={factura}
                                            />
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }  
            </div>   
        </>
     );
}
 
export default ListadoFacturas;