import React,{useState,useContext,useEffect} from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import pacienteContext from '../../context/pacientes/pacienteContext';
import authContext from '../../context/autenticacion/authContext';
import serviciosContext from '../../context/servicios/serviciosContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Swal from 'sweetalert2';
import Error from './../admin/Error';

const FormularioFacturas = ({props}) => {
    
    //llamados a los context
    const authsContext = useContext(authContext);
    const {usuario} = authsContext;

    const servicioContext = useContext(serviciosContext);
    const {servicios, listarServicios} = servicioContext;
    
    const facturaContext = useContext(facturasContext);
    const {agregarFacturas} = facturaContext;

    const {tratamientos, listarTratamientos} = useContext(tratamientoContext);

    const {pacientes, listarPacientes} = useContext(pacienteContext);

    let documentoPersonal;
    let nombrePersonal;

    if(usuario){
        documentoPersonal = usuario.documento;
        nombrePersonal = usuario.nombre + ' ' + usuario.apellido; 
    }
    else{
        documentoPersonal = null;
        nombrePersonal = null;
    }
    
    //state donde se guarda la factura
    const [factura,guardarfactura]= useState({
        valor: '',
        fecha: ((new Date().getUTCDate())+'/'+(new Date().getMonth()+1)+'/'+(new Date().getFullYear())),
        tratamiento:'',
        documento_paciente:'',
        nombre_paciente:'',
        documento_cajero: documentoPersonal,
        nombre_cajero: nombrePersonal,
        estado: 'Pendiente'
    });

    const [tipocita, guardarTipoCita] = useState('');

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    }); 
    
    useEffect(() => {
        listarServicios();
        listarTratamientos();
        listarPacientes();
        // eslint-disable-next-line
    }, []);

    //funcion que extrae los valores de los input y los guarda en el state
    const Guardar= e =>{
        guardarfactura({
            ...factura,
            [e.target.name]: e.target.value
        })
    }
    
    //funcion que guarda la factura en la base de datos
    const BotonGuardar= e =>{
        e.preventDefault();

        if(factura.documento_paciente.trim() === '' && tipocita.trim() === ''){
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            );
            return;
        }
        if(factura.documento_paciente.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el documento del paciente',
                bandera: true
            })
            return;
        }
        if(tipocita.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese el tipo de la cita del paciente',
                bandera: true
            })
            return;
        }

        else{
            const {fecha, documento_paciente, documento_cajero, nombre_cajero, estado} = factura

            if(tipocita === 'Tratamiento'){
                if(!tratamientos.filter( tratamiento => tratamiento.pacienteId === factura.documento_paciente && tratamiento.estado !== 'Finalizado' )[0]){
                    Swal.fire(
                        'Error',
                        'El Paciente digitado actualmente no se encuentra en un tratamiento o no se encuentra registrado en el sistema',
                        'error'
                    )
                }
        
                else if(tratamientos.filter( tratamiento => tratamiento.pacienteId === factura.documento_paciente
                     && tratamiento.saldoAbonado === servicios.filter(servicio => servicio.nombre_servicio === tratamiento.servicio)[0].precioTotal)[0]){
                    Swal.fire(
                        'Error',
                        'El Paciente digitado ya ha acabado con su tratamiento correspondiente',
                        'error'
                    )
                }
        
                else
                {
                    let tratamientoPaciente = tratamientos.filter( tratamiento => tratamiento.pacienteId === documento_paciente && tratamiento.estado !== 'Finalizado' )[0];
                    
                    let valor = servicios.filter( servicio => servicio.nombre_servicio === tratamientoPaciente.servicio)[0].precioTotal / tratamientoPaciente.cuotas;
                    let nombre_paciente = tratamientos.filter( tratamiento => tratamiento.pacienteId === documento_paciente )[0].pacienteNombre;
                    let tratamiento = tratamientoPaciente.servicio;
        
                    agregarFacturas({valor, fecha, documento_paciente, nombre_paciente, documento_cajero, nombre_cajero, tratamiento, estado});
                    props.history.push('/consultar-facturas');
                    window.location.reload(true);
                }
            }
    
            else{
                    let valor = 52500;
                    let nombre_paciente = pacientes.filter( paciente => paciente.documento === documento_paciente)[0].nombre + ' ' + pacientes.filter( paciente => paciente.documento === documento_paciente)[0].apellido;
                    let tratamiento = "Consulta General";
        
                    agregarFacturas({valor, fecha, documento_paciente, nombre_paciente, documento_cajero, nombre_cajero, tratamiento, estado});
                    props.history.push('/consultar-facturas');
                    window.location.reload(true);
            }
        }
    }

    return (  
        <>
        <div className="container mt-4 pfacturas" >
        
        <form onSubmit={BotonGuardar}>
            <div className=" container fondoForm">
                <div className="container Formularios">
                    <div className="form-group ">
                        <label className="font-weight-bold">Documento del Paciente</label>
                        <input className="form-control col-md-11" name="documento_paciente" onChange={Guardar} value={factura.documento_paciente} />
                    </div>
                </div>

                <div className="container Formularios">                
                    <div className="form-group">
                        <label className="font-weight-bold">Documento del Cajero</label>
                        <input type="number" className="form-control col-md-11" name="documento_cajero" value={documentoPersonal} readOnly="readonly" />
                    </div> 
                </div>

                <div className="form-group ml-3" >
                    <label className="font-weight-bold">Tipo Cita</label>
                    <select className="form-control" name="tipocita" style={{width:'92%'}} onChange={(e) => guardarTipoCita(e.target.value)} value={tipocita}>
                        <option value="">Seleccione....</option>
                        <option value="Tratamiento">Tratamiento</option>
                        <option value="Consulta General">Consulta General</option>
                    </select>
                </div>

                <div className="form-group pl-3" style={{width:'88.5%'}}>
                    {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
                </div> 

                <div className="ml-2">
                    <input 
                        type="submit" 
                        className="form-control btnForm font-weight-bold"
                        value="Generar Factura"
                        style={{width:'91.2%'}}
                    />
                </div>
                

            </div>
        </form>     
    </div>
    </>
    );
}
 
export default FormularioFacturas;