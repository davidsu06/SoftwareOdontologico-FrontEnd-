import React,{useState,useContext, useEffect} from 'react';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import serviciosContext from '../../context/servicios/serviciosContext';
import Swal from 'sweetalert2';
import Error from './../admin/Error';

const FormularioCrearServicio = ({props}) => {

    const {tratamientos,tratamientoseleccionado, listarTratamientos, iniciarTratamiento, actualizarTratamiento} = useContext(tratamientoContext);
    const {pacientes, listarPacientes} = useContext(pacienteContext);
    const {servicios, listarServicios} = useContext(serviciosContext);
    let pacienteNombre;

    const [tratamiento, guardarTratamiento]= useState({
        pacienteId: '',
        servicio: '',
        citasVistas: 0,
        cuotas: 0,
        saldoAbonado: 0,
        estado: ''
    });

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    }); 

    useEffect(()=>{
        if(tratamientoseleccionado){
            guardarTratamiento(tratamientoseleccionado);
        }

        else{
            guardarTratamiento({
                pacienteId: '',
                servicio: '',
                citasVistas: 0,
                cuotas: 0,
                saldoAbonado: 0,
                estado:'En Proceso'
            });
        }

        listarPacientes();
        listarServicios();
        listarTratamientos();
        // eslint-disable-next-line
    },[tratamientoseleccionado]);
    
    const {pacienteId, servicio, citasVistas, cuotas, saldoAbonado, estado} = tratamiento;

    const changeTratamiento = e =>{
        guardarTratamiento({
            ...tratamiento,
            [e.target.name]: e.target.value
        })
    }

    const submitTratamiento= e =>{
        e.preventDefault();

        if(pacienteId.trim() === '' && servicio.trim() === '' && cuotas <= 0){
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            )
            return;
        }
        if(pacienteId.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el documento del paciente',
                bandera: true
            })
            return;
        }
        if(servicio.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el servicio a realizar para el paciente',
                bandera: true
            })
            return;
        }
        if(cuotas <= 0){
            guardarError({
                Mensaje: 'Ingrese una cantidad de cuotas valida',
                bandera: true
            })
            return;
        }

        else if(tratamientos.filter( tratamiento => tratamiento.pacienteId === pacienteId && tratamiento.estado === 'En Proceso' )[0] && !tratamientoseleccionado ){
            Swal.fire(
                'Error',
                'El Paciente digitado actualmente se encuentra en un tratamiento',
                'error'
            )
        }

        else if(!pacientes.filter( paciente => paciente.documento === tratamiento.pacienteId)[0]){
            Swal.fire(
                'Error',
                'El Paciente digitado no se encuentra registrado en el sistema',
                'error'
            )
            return;
        }

        else{

            if(tratamientoseleccionado){
                actualizarTratamiento(tratamiento)
            }

            else{
                pacienteNombre = pacientes.filter( paciente => paciente.documento === tratamiento.pacienteId)[0].nombre + 
                ' ' + pacientes.filter( paciente => paciente.documento === tratamiento.pacienteId)[0].apellido;
                iniciarTratamiento({pacienteId, pacienteNombre, servicio, citasVistas, cuotas, saldoAbonado, estado});
            }

            props.history.push('/consultar-tratamientos');
        }
       
    }
    
    return (  
        <>
            <div className="container mt-4 pfacturas" >
            
                <form onSubmit={submitTratamiento}>
                    <div className="container fondoForm">

                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Documento del Paciente</label>
                                <input type="text" 
                                    className="form-control"
                                    name="pacienteId" 
                                    placeholder="Digite el documento del paciente"
                                    readOnly={tratamientoseleccionado ? true :null } 
                                    value={pacienteId}
                                    onChange={changeTratamiento}
                                />
                            </div> 
                        </div>

                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Servicio</label>
                                <select className="form-control" name="servicio" value={servicio} onChange={changeTratamiento}>
                                    <option value="">Seleccione....</option>
                                    {servicios
                                        ? <>{servicios.map(servicio => (
                                            <option key={servicio._id} value={servicio.nombre_servicio}>{servicio.nombre_servicio}</option>
                                        ))}</>

                                        : <option>No hay Servicios Disponibles</option>
                                    }
                                </select>
                            </div> 
                        </div>

                        <div className="container align-content-center Formularios" style={{ width: '94.5%' }}>
                            <div className="form-group">
                                <label className="font-weight-bold">Cuotas para pago del Tratamiento</label>
                                <input type="number"
                                    className="form-control" 
                                    name="cuotas" 
                                    placeholder="Digite la cantidad de cuotas" 
                                    value={cuotas} 
                                    onChange={changeTratamiento}/>
                            </div> 
                        </div>
                        
                        
                        <div className="form-group pl-3">
                            {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
                        </div> 

                        <div className="form-group ml-2">
                            <input type="submit" id="GuardarIniciarTratamiento"
                                className="form-control btnForm font-weight-bold"
                                style={{ width: '95.5%' }}
                                value= {tratamientoseleccionado ? "Editar Tratamiento" : "Iniciar Tratamiento"}
                            />
                        </div>
                    </div>          
                </form>
            </div>
        </>
    );
}
 
export default FormularioCrearServicio;