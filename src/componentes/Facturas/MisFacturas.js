import React, { useContext, useEffect } from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import AuthContext from '../../context/autenticacion/authContext';
import Factura from './Factura';

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

    return ( 
        <>
            {MisFacturas.length === 0
                ? 
                    (<h3 className="text-center">No hay Facturas</h3>) 

                : 
                    (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Mi Documento</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Documento Médico</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    MisFacturas.map(factura => (
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
        </>
     );
}
 
export default MisFacturas;