import React, {useContext, useState, useEffect} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import { Link } from 'react-router-dom';

const Historia = ({historia}) => {

    const { HistoriaActual } = useContext(historiaContext);

    const { fecha, hora, pacienteId, descripcion } = historia;
    const newfecha = fecha.substr(0,10)

    const SeleccionarHistoria = historia => {   
        HistoriaActual(historia);        
    }

    return ( 
        <>
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                <td>{pacienteId != '' ? pacienteId : 'No asignado'}</td>
                <td>{descripcion}</td>

                <td className="text-center">

                    <div className="container d-flex justify-content-between">

                        <div className="mr-3">

                            <Link to={'/editar-hist-clinica'} 
                                type="button" class="fas fa-pencil-alt text-decoration-none text-dark" 
                                onClick={() => SeleccionarHistoria(historia)}
                            ></Link>
                            
                        </div>

                    </div>       
                    
                </td>


                

            </tr>

        </>
     );
}
 
export default Historia