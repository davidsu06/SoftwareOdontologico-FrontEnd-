import React, { useContext } from 'react';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';

const Cita = ({cita}) => {

    const citasContext = useContext(citaContext);
    const { CitaActual, eliminarCita, CitaAsignada } = citasContext;

    const { fecha, hora, pacienteId } = cita;
    
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
                <td>{pacienteId}</td>

                <td className="text-center">

                    <Link to={'/asignar-citas'} className="mr-3 text-info" onClick={() => CitaAsignada(cita)}>Asignar</Link>
                    
                    <Link to={'/editar-citas'} type="button" class="fas fa-pencil-alt text-decoration-none text-dark mr-3" onClick={() => SeleccionarCita(cita)}></Link>

                    <i type="button" class="fas fa-trash-alt" onClick={() => onClickEliminar(cita._id)}></i>
                   
                    
                </td>

            </tr>

        </>
     );
}
 
export default Cita;