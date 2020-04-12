import React, { useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';

const CitaPaciente = ({cita}) => {

    const { fecha, hora, estado } = cita;

    return ( 
        <>
            <tr>
                <td>{fecha}</td>
                <td>{hora}</td>
                <td>{estado}</td>
                <td>
                    <a href="#!" className="text-center">Cancelar cita</a>
                </td>
            </tr>
        </>
     );
}
 
export default CitaPaciente;