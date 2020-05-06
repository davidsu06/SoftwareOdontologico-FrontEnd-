import React, {useState, useContext, useEffect} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import citaContext from '../../context/citas/citaContext';
import servicioContext from '../../context/servicios/serviciosContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Swal from 'sweetalert2';

const FormularioCrearHistoria = () => {

    const {historiaseleccionado, crearHistoria, modificarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);
    const {citaseleccionada, modificarCita} = useContext(citaContext);
    const {servicios, listarServicios} = useContext(servicioContext);
    const {tratamientos, listarTratamientos, actualizarTratamiento} = useContext(tratamientoContext);

    const [tratamiento, guardarTratamiento] = useState({});

    const [historia, guardarHistoria] = useState({
        pacienteId: '',
        personalId: '',
        fecha: '',
        hora: '',
        descripcion: '',
        servicio: ''
    });

    const [asignarPaciente, guardarasignarPaciente] = useState({
        pacienteId: '',
        _id: '',
        fecha: '',
        hora: '',
        estado: ''
    });

    const {pacienteId, personalId, fecha, hora, descripcion, servicio} = historia;

    useEffect( () => {
        let newfecha;
        if(usuario && citaseleccionada){
            newfecha = citaseleccionada.fecha.substr(0,10)
            guardarHistoria({
               pacienteId: citaseleccionada.pacienteId,
               personalId: usuario.documento,
               fecha: newfecha,
               hora: citaseleccionada.hora,
               descripcion:'',
               servicio: ''
            });

            guardarasignarPaciente({
                pacienteId,
                _id: citaseleccionada._id,
                fecha,
                hora,
                estado:'Cumplida'
            });

            listarServicios();
            listarTratamientos();
            guardarTratamiento(tratamientos.filter( tratamiento =>  tratamiento.pacienteId === historia.pacienteId && tratamiento.estado !== 'Finalizado')[0]);
        }

        else if(historiaseleccionado){
            newfecha = historiaseleccionado.fecha.substr(0,10)
            guardarHistoria({
                pacienteId: historiaseleccionado.pacienteId,
                personalId: historiaseleccionado.personalId,
                fecha: newfecha,
                hora: historiaseleccionado.hora,
                descripcion: historiaseleccionado.descripcion,
                servicio: historiaseleccionado.servicio
             });
        }
        // eslint-disable-next-line
    },[usuario, citaseleccionada, historiaseleccionado]);

    const changeHistoria = e => {
        guardarHistoria({
            ...historia,
            [e.target.name]: e.target.value
        })
    }

    const submitCrearHistoria = e =>{
        e.preventDefault();
        if (pacienteId.trim()==='' || personalId.trim()==='' || fecha.trim()==='' || hora.trim()==='' || descripcion.trim()==='' || servicio.trim() === '') {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            )
        }

        if(citaseleccionada){
            crearHistoria(historia);
            modificarCita(asignarPaciente);

            const {_id, pacienteId, pacienteNombre, servicio, citasVistas, cuotas, saldoAbonado, estado } = tratamiento;
            let nuevoestado;
            let nuevacitasvistas;
            let servicioPaciente = servicios.filter( servicio => servicio.nombre_servicio === tratamiento.servicio)[0];

            nuevacitasvistas = citasVistas + 1;

            if( nuevacitasvistas === servicioPaciente.cantidadCitas && saldoAbonado === servicioPaciente.precioTotal){
                nuevoestado = 'Finalizado';
            }

            else if(nuevacitasvistas === servicioPaciente.cantidadCitas && saldoAbonado !== servicioPaciente.precioTotal){
                nuevoestado = 'Pagos Pendientes';
            }
            
            else{
                nuevoestado = estado;
            }

            const nuevotratamiento = {
                _id, 
                pacienteId,
                pacienteNombre,
                servicio,
                citasVistas: nuevacitasvistas,
                cuotas,
                saldoAbonado,
                estado: nuevoestado
            }

            actualizarTratamiento(nuevotratamiento);
        }

        else if(historiaseleccionado){
            const {_id} = historiaseleccionado
            modificarHistoria({_id, historia});
        }     
    }

    return ( 
        <div className="container mt-4" >
        
            <form onSubmit={submitCrearHistoria}>
                <div className=" container fondoForm">
                    <div className="container Formularios">
                        <div className="form-group">
                            <label className="font-weight-bold">Documento del Paciente</label>
                            <input type="text" 
                            className="form-control col-md-11" name="pacienteId" readOnly="readonly" value={pacienteId}
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Documento del Personal</label>
                            <input type="text" 
                            className="form-control col-md-11" name="personalId" readOnly="readonly" value={personalId}
                            />
                        </div>
                    </div>
                    <div className="container Formularios"> 
                        <div className="form-group">
                            <label className="font-weight-bold">Fecha de la cita</label>
                            <input type="date" className="form-control col-md-11" name="fecha"  readOnly="readonly" value={fecha}/>
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Hora de la cita</label>
                            <input type="time" className="form-control col-md-11" name="hora"  readOnly="readonly" value={hora}/>
                        </div>
                    </div>

                    <div className="form-group ml-3">
                        <label className="font-weight-bold">Tratamiento</label>
                        {!historiaseleccionado
                            ?(
                                <select className="form-control col-md-11" name="servicio" onChange={changeHistoria} value={servicio}>
                                    <option value="">Seleccione....</option>
                                    {!tratamiento
                                        ? ( <option>No Hay Tratamientos disponibles</option> )

                                        : ( <option key={tratamiento._id} value={tratamiento.servicio}>{tratamiento.servicio}</option> )
                                    }
                                </select >
                            )

                            :(
                                <input className="form-control col-md-11" name="servicio" readOnly="readonly" value={servicio}/>
                            )
                        }
                        
                    </div>

                    <div className="form-group ml-3">
                        <label className="font-weight-bold">Descripción</label>
                        <textarea 
                            name="descripcion" 
                            className="form-control"
                            rows="8"
                            placeholder="Descripción de la cita." 
                            value={descripcion}
                            style={{width:'92%'}}
                            onChange={changeHistoria}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            className="btn btn-success form-control text-center font-weight-bold ml-3"
                            style={{width:'90.5%'}}
                            value={historiaseleccionado ? 'Editar Historia Clínica' :'Crear Historia Clínica'} 
                        />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default FormularioCrearHistoria;