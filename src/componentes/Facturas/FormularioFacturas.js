import React,{useState,useContext,useEffect} from 'react';
import facturasContext from '../../context/facturas/facturasContext';
import pacientesContext from '../../context/pacientes/pacienteContext';
import authContext from '../../context/autenticacion/authContext';
import serviciosContext from '../../context/servicios/serviciosContext';
import { Redirect } from 'react-router-dom';
//import { PDFViewer } from '@react-pdf/renderer';
//import MyDocument from './pdf';

const FormularioFacturas = () => {
    
    const authsContext = useContext(authContext);
    const {usuario} = authsContext;
    let documento;

    if(usuario){
        documento = usuario.documento
    }
    else{
        documento = null;
    }
    
    //state donde se guarda la factura
    const [factura,guardarfactura]= useState({
        valor: '',
        fecha: ((new Date().getUTCDate())+'/'+(new Date().getMonth()+1)+'/'+(new Date().getFullYear())),
        tratamiento:'',
        documento_paciente:'1152714125-5',
        documento_cajero: documento
    });

    //llamados a los context
    const servicioContext = useContext(serviciosContext);
    const {servicios,listarServicios} = servicioContext;

    const pacienteContext= useContext(pacientesContext);
    const {pacientes, listarPacientes} = pacienteContext;
    
    const facturaContext = useContext(facturasContext);
    const {facturaseleccionada, agregarFacturas, seleccionarFactura} = facturaContext;

    useEffect(() => {
        listarServicios();
        listarPacientes(); 
        // eslint-disable-next-line
    }, []);
    
    //funcion que guarda la factura en la base de datos
    const BotonGuardar= e =>{
        e.preventDefault();
        agregarFacturas(factura);
        seleccionarFactura(factura)
    }

    //funcion que extrae los valores de los input y los guarda en el state
    const Guardar= e =>{
        guardarfactura({
            ...factura,
            [e.target.name]: e.target.value
        })
        console.log(factura);
    }

    return (  
        <>
        <div className="container mt-4 pfacturas" >
        
        <form onSubmit={BotonGuardar}>
            <div className=" container fondoForm">
            <div className="container Formularios">
            <div className="form-group ">
                <label className="font-weight-bold">DOCUMENTO DEL PACIENTE</label>
                <select className="form-control col-md-11" id="select" name="documento_paciente" onChange={Guardar} value={factura.documento_paciente}>
                    <option value="primera">Selecione...</option>
                    {pacientes.length === 0
                ? (<option>no hay servicios</option>  )
                : pacientes.map(paciente => (
                <option key={paciente._id} value={paciente.documento}>{paciente.documento}-{paciente.nombre} {paciente.apellido}</option> 
                    ))
                                }
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold" onChange={Guardar}>TRATAMIENTO</label>
                <select className="form-control col-md-11" id="select" name="tratamiento" onChange={Guardar} value={factura.tratamiento}>
                <option value="primera">Selecione...</option>  
                {servicios.length === 0
                ? (<option>no hay servicios</option>  )
                : servicios.map(servicios => (
                <option key={servicios._id} value={servicios._id}>{servicios.nombre_servicio}</option> 
                    ))
                                }
                </select>
            </div>
            </div>
            <div className="container Formularios">                
            <div className="form-group">
                <label className="font-weight-bold">VALOR</label>
                <input type="number" className="form-control col-md-11" name="valor" onChange={Guardar} value={factura.valor}/>
            </div> 
            <div className="form-group">
                <label className="font-weight-bold">CAJERO</label>
                <input type="number" className="form-control col-md-11" name="documento_cajero" value={documento} disabled/>
            </div> 
            </div>
            <input 
                type="submit" 
                className="form-control btnForm font-weight-bold col-md-11"
                value="Generar Factura"
            />
        </div>
        </form>

        {facturaseleccionada
            ?  <Redirect to="/factura-pdf" />

            :  <Redirect to="/crear-factura" />
        }
        
    </div>
    </>
    );
}
 
export default FormularioFacturas;