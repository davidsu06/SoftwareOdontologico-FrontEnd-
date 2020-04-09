import React, { useContext } from 'react';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';

const Cita = ({cita}) => {

    const citasContext = useContext(citaContext);
    const { citaseleccionada, CitaActual, eliminarCita } = citasContext;

    const { fecha, hora } = cita;
    
    console.log(fecha)
    console.log(hora)
    const newfecha = fecha.substr(0,10)
    const SeleccionarCita = cita => {   
        CitaActual(cita);        
    }

    const onClickEliminar = id => {
        eliminarCita(id);
        
    }

    return ( 
        <>
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                <td className="text-center">
                        <Link to={'/editar-citas'}
                        type="button" 
                        className="btn btn-info mr-3"
                        onClick={() => SeleccionarCita(cita)}

                        >Editar</Link>

                        <button 
                        type="button"
                        className="btn btn-danger" 
                        onClick={() => onClickEliminar(cita._id)}
                        >Eliminar</button>
                </td>

            </tr>

        </>
     );
}
 
export default Cita;