import React, {useState, useContext, useEffect} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import citaContext from '../../context/citas/citaContext';

const FormularioCrearHistoria = () => {

    const {historiaseleccionado, crearHistoria, modificarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);
    const {citaseleccionada, modificarCita} = useContext(citaContext);

    const [historia, guardarHistoria] = useState({
        pacienteId: '',
        personalId: '',
        fecha: '',
        hora: '',
        descripcion: ''
    });

    const [asignarPaciente, guardarasignarPaciente] = useState({
        pacienteId: '',
        _id: '',
        fecha: '',
        hora: '',
        estado: ''
    });

    const {pacienteId, personalId, fecha, hora, descripcion} = historia;

    useEffect(()=>{
        let newfecha;
        if(usuario && citaseleccionada){
            newfecha = citaseleccionada.fecha.substr(0,10)
            guardarHistoria({
               pacienteId: citaseleccionada.pacienteId,
               personalId: usuario.documento,
               fecha: newfecha,
               hora: citaseleccionada.hora,
               descripcion:''
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
                descripcion: historiaseleccionado.descripcion
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
                
                <div className="form-group">
                    <label className="font-weight-bold">Documento del Paciente</label>
                    <input type="text" 
                    className="form-control" name="pacienteId" readOnly="readonly" value={pacienteId}
                    />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Documento del Personal</label>
                    <input type="text" 
                    className="form-control" name="personalId" readOnly="readonly" value={personalId}
                    />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Fecha de la cita</label>
                    <input type="date" className="form-control" name="fecha"  readOnly="readonly" value={fecha}/>
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Hora de la cita</label>
                    <input type="time" className="form-control" name="hora"  readOnly="readonly" value={hora}/>
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Descripción</label>
                    <textarea 
                        name="descripcion" 
                        className="form-control"
                        rows="8"
                        placeholder="ej. Cita de Ortodoncia" 
                        value={descripcion}
                        style={{width:'96%'}}
                        onChange={changeHistoria}>
                    </textarea>
                </div>

                {/*error.bandera ? <Error mensaje={error.Mensaje}/> : null*/}

                <div className="form-group">
                    <input type="submit"
                    className="form-control boton font-weight-bold"
                    value={historiaseleccionado ? 'Editar Historia Clínica' :'Crear Historia Clínica'} 
                    />
                </div>
                
            </form>
        </div>
     );
}
 
export default FormularioCrearHistoria;