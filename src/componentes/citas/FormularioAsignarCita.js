import React, { useState, useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Swal from 'sweetalert2';
import Error from './../admin/Error';

const FormularioAsignarCita = ({redireccion}) => {

    const citasContext = useContext(citaContext);
    const { citasignada, modificarCita, citaExistentePaciente, citaexistente } = citasContext;
    const { tratamientos, listarTratamientos } = useContext(tratamientoContext);
    const {fecha, hora, _id} = citasignada;
    let newfecha

    if(fecha !== undefined) newfecha = fecha.substr(0,10)

    const [asignarPaciente, guardarasignarPaciente] = useState({
        pacienteId: '',
        tipo: ''
    });

    const [idPaciente, actualizarIdPaciente] = useState({
        pacienteId: ''
    })

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    }); 

    useEffect( () => {
        if (asignarPaciente.pacienteId && asignarPaciente.tipo) {
            citaExistentePaciente(asignarPaciente.pacienteId, asignarPaciente.tipo)    
        }

        listarTratamientos();
        // eslint-disable-next-line
    }, [asignarPaciente.pacienteId, asignarPaciente.tipo, citaExistentePaciente])

    const onChange = e =>{
        guardarasignarPaciente({
            ...asignarPaciente,
            [e.target.name]: e.target.value
        })

    }

    const Submit = e => {
        e.preventDefault();

        if (asignarPaciente.pacienteId.trim() === '' && asignarPaciente.tipo.trim() === '') {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            )
            return;
        }
        if(asignarPaciente.pacienteId.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el documento del paciente',
                bandera: true
            })
            return;
        }
        if(asignarPaciente.tipo.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el tipo de cita',
                bandera: true
            })
            return;
        }
        
        else
        {
            if(citaexistente)
            {
                Swal.fire(
                    'Error',
                    'El paciente digitado ya cuenta con una cita asignada',
                    'error'
                )
            }

            else if(!tratamientos.filter( tratamiento => tratamiento.pacienteId === asignarPaciente.pacienteId && tratamiento.estado !== 'Finalizado')[0]){
                Swal.fire(
                    'Error',
                    'El Paciente digitado actualmente no se encuentra en un tratamiento o no se encuentra registrado en el sistema',
                    'error'
                )
            }

            else 
            {
                actualizarIdPaciente({
                    pacienteId: asignarPaciente.pacienteId
                })

                modificarCita({
                    _id,
                    pacienteId: asignarPaciente.pacienteId,
                    estado: 'Asignado',
                    tipo: asignarPaciente.tipo
                })

                Swal.fire(
                    'Correcto',
                    'La cita se ha asignado correctamente',
                    'success'
                )

                guardarasignarPaciente({
                    pacienteId: '',
                    tipo: ''
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
                                <label className="font-weight-bold">Documento:</label>
                                <input type="text" className="form-control" name="pacienteId" placeholder="Documento" onChange={onChange} value={asignarPaciente.pacienteId}></input>

                            </div>

                            <div className="form-group">
                                <label className="font-weight-bold">Tipo Cita:</label>
                                <select className="form-control" name="tipo" onChange={onChange} value={asignarPaciente.tipo}>
                                    <option value="">Seleccione....</option>
                                    <option value="Tratamiento">Tratamiento</option>
                                    <option value="Consulta General">Consulta General</option>
                                </select>
                            </div>

                            <div className="form-group" style={{width:'96.5%'}}>
                                {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
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