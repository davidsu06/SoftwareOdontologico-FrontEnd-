import React, { useState, useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import Swal from 'sweetalert2';

const FormularioAsignarCita = ({redireccion}) => {

    const citasContext = useContext(citaContext);
    const { citasignada, modificarCita, citaExistentePaciente, citaexistente } = citasContext;
    const {fecha, hora, _id} = citasignada;
    // console.log(fecha)
    // console.log(hora)
    // console.log(pacienteId)
    // console.log(_id)
    let newfecha

    if(fecha !== undefined) newfecha = fecha.substr(0,10)

    const [asignarPaciente, guardarasignarPaciente] = useState({
        pacienteId: ''
    });

    const [idPaciente, actualizarIdPaciente] = useState({
        pacienteId: ''
    })

    useEffect(() => {
        if (asignarPaciente.pacienteId != null) {
            citaExistentePaciente(asignarPaciente.pacienteId)
            
        }
    }, [asignarPaciente.pacienteId, citaExistentePaciente])

    const onChange = e =>{
        guardarasignarPaciente({
            ...asignarPaciente,
            [e.target.name]: e.target.value
        })

    }

    const Submit = e => {
        e.preventDefault();

        if (asignarPaciente.pacienteId.trim() === '') {
            Swal.fire(
                'Error',
                'Por favor ingrese un documento',
                'error'
            )
        }else{
            if(citaexistente){
                Swal.fire(
                    'Error',
                    'El usuario ya cuenta con una cita asignada',
                    'error'
                )
            }else{
                actualizarIdPaciente({
                    pacienteId: asignarPaciente.pacienteId
                })

                modificarCita({
                    _id,
                    pacienteId: asignarPaciente.pacienteId,
                    estado: 'Asignado'
                })

                Swal.fire(
                    'Correcto',
                    'La cita se asignó correctamente',
                    'success'
                )
                guardarasignarPaciente({
                    pacienteId: ''
                })
                redireccion(true);
            }

        }
        
    }

    return ( 
        <>
            <div className="container">
                
                <div className="row mt-3 justify-content-around">

                    <div>

                        <div className="card bg-light shadow" style={{ borderWidth: 2}}>
                            
                            <div className="card-body">

                                <h5 className="card-title font-weight-bold">Información de la cita</h5>

                                <p className="card-text">
                                    Fecha: {newfecha}
                                </p>

                                <p className="card-text">
                                    Hora: {hora}
                                </p>

                                <p className="card-text">
                                    Paciente: {idPaciente.pacienteId}
                                </p>

                            </div>

                        </div>

                    </div>
                    
                    <div>

                        <h3 className="text-center mb-4">Digite el documento del paciente</h3>

                        <form onSubmit={Submit}>

                            <div className="form-group">

                                <input type="text" className="form-control" name="pacienteId" placeholder="Documento" onChange={onChange} value={asignarPaciente.pacienteId}></input>

                            </div>

                            <div className="form-group">

                                <input type="submit" className="form-control btn btn-success font-weight-bold" value="Asignar cita"></input>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
     );
}
 
export default FormularioAsignarCita;