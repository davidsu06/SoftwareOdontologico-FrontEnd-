import React, {useState, useContext, useEffect} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import citaContext from '../../context/citas/citaContext';
import servicioContext from '../../context/servicios/serviciosContext'

const FormularioCrearHistoria = (props) => {

    const {historiaseleccionado, crearHistoria, modificarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);
    const {citaseleccionada, modificarCita} = useContext(citaContext);
    const {servicios,listarServicios} = useContext(servicioContext);

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

    useEffect(()=>{
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
        listarServicios();
    },[usuario, citaseleccionada, historiaseleccionado]);

    const changeHistoria = e => {
        guardarHistoria({
            ...historia,
            [e.target.name]: e.target.value
        })
    }

    const submitCrearHistoria = e =>{
        e.preventDefault();
        if (pacienteId.trim()==='' || personalId.trim()==='' || fecha.trim()==='' || hora.trim()==='' || descripcion.trim()==='') {
            console.log('Error al mandar la Información')
        }

        if(citaseleccionada){
            crearHistoria(historia);
            modificarCita(asignarPaciente);
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
                        <select className="form-control col-md-11" name="servicio" onChange={changeHistoria} value={servicio}>
                            <option value="">{historiaseleccionado ? (servicio) : ("Seleccione....")}</option>
                            {servicios.length === 0
                                ? (<option>No Hay Servicios disponibles</option>)

                                :(
                                    servicios.map(servicio => (
                                        <option key={servicio._id} value={servicio.nombre_servicio}>{servicio.nombre_servicio}</option>
                                    ))
                                )
                            }
                        </select >
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

                    {/*error.bandera ? <Error mensaje={error.Mensaje}/> : null className="form-control boton font-weight-bold ml-3"*/}

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