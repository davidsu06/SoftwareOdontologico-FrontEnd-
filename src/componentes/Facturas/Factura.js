import React from 'react';

const Factura = ({factura}) => {

    return ( 
        <>
            <td>
                {(factura.fecha)}
            </td>
            <td>
                <p>{factura.documento_paciente} </p>
            </td>
            {/*<td className="table-light">
                <p>{factura.tratamiento} </p>
    </td>*/}
            <td>
                <p>{factura.valor} </p>
            </td>
            <td>
                <p>{factura.documento_cajero} </p>
            </td>
        </>
     );
}
 
export default Factura;