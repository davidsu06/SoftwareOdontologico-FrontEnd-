import React, { useContext, useState, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Cita = ({cita}) => {
    
    const citasContext = useContext(citaContext);
    const { CitaActual, eliminarCita, CitaAsignada } = citasContext;

    const { fecha, hora, pacienteId, estado } = cita;
    
    // console.log(fecha)
    // console.log(hora)
    // console.log(estado)

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
                <td>{pacienteId != '' ? pacienteId : 'No asignado'}</td>
                <td>{estado}</td>

                <td className="text-center">

                    <div className="container d-flex justify-content-between">

                        { pacienteId != '' 
                        ?
                            (
                                <div></div>
                            )
                        :
                            (
                                <div>
                                    <Link to={'/asignar-citas'} className=" text-info" onClick={() => CitaAsignada(cita)}>Asignar</Link>
                                </div>
                            )
                        }

                        <div className="mr-3">
                            {estado === 'Sin asignar'
                                ? null

                                : 
                                    (
                                        <Link to={'/crear-hist-clinica'} 
                                            type="button" 
                                            class="far fa-address-book text-dark mr-4" 
                                            onClick={() => SeleccionarCita(cita)}
                                        ></Link>
                                    )
                            }

                            <Link to={'/editar-citas'} type="button" class="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarCita(cita)}></Link>

                            <i type="button" class="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(cita._id)}></i>

                            <Modal />
                            
                        </div>

                    </div>       
                    
                </td>


                

            </tr>

        </>
     );
}
 
export default Cita;