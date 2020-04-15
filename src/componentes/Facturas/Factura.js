import React from 'react';

const Factura = ({factura}) => {

    return ( 
        <>
            <td className="table-light">
                {(factura.fecha)}
            </td>
            <td className="table-light">
                <p>{factura.documento_paciente} </p>
            </td>
            {/*<td className="table-light">
                <p>{factura.tratamiento} </p>
    </td>*/}
            <td className="table-light">
                <p>{factura.valor} </p>
            </td>
            <td className="table-light">
                <p>{factura.documento_cajero} </p>
            </td>
        </>
     );
}
 
export default Factura;