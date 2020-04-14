import React, { useContext, useEffect } from 'react';
import facturasContext from '../../context/facturas/facturasContext';

const ListadoPaciente = () => {

    

    // Funcion para listar pacientes

    const facturaContext = useContext(facturasContext);
    const {listarFacturas, facturas} = facturaContext;

    useEffect(() => {
        listarFacturas();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <>
            <table className="table">
                {facturas.length === 0
                ? (<li className="list"><p>No hay Facturas</p></li>)
                : facturas.map(factura => (
                    <>
                    <tr>
                    <td className="table-light">
                        {(factura.fecha)}
                    </td>
                    <td className="table-light">
                        <p>{factura.documento_paciente} </p>
                    </td>
                    <td className="table-light">
                        <p>{factura.tratamiento} </p>
                    </td>
                    <td className="table-light">
                        <p>{factura.valor} </p>
                    </td>
                    <td className="table-light">
                        <p>{factura.documento_cajero} </p>
                    </td>
                    </tr>
                    </>
                     )
                )
                }
                </table>
                                                  
            
        </>
     );
}
 
export default ListadoPaciente;