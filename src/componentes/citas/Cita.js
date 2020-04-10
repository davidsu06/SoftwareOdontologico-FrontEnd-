import React, { useContext, useState } from 'react';
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
                <td>{pacienteId != '' ? pacienteId : 'No asignado'}</td>
                <td></td>

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

                            <Link to={'/editar-citas'} type="button" class="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarCita(cita)}></Link>

                            <i type="button" class="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(cita._id)}></i>

                            <i type="button" class="fas fa-info-circle mx-2" data-toggle="modal" data-target="#detallescita"></i>
                            
                        </div>

                    </div>       
                    
                </td>


                <div class="modal fade" id="detallescita" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog" role="document">

                        <div class="modal-content">

                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detalles de la cita</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <p>Paciente: </p>
                                <p>Documento: </p>
                                <p>Motivo de la cita: </p>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>

                        </div>

                    </div>

                </div>

            </tr>

        </>
     );
}
 
export default Cita;