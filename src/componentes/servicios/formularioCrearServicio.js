import React,{useState,useContext, useEffect} from 'react';
import serviciosContext from '../../context/servicios/serviciosContext';

const FormularioCrearServicio = ({props}) => {

    const servicioContext = useContext(serviciosContext);
    const {servicioseleccionado,agregarServicios, modificarServicio} = servicioContext;

    const [servicio,guardarservicio]= useState({
        nombre_servicio : '',
        precioTotal: 0,
        cantidadCitas: ''
    });

    useEffect(()=>{
        if(servicioseleccionado){
            guardarservicio(servicioseleccionado);
        }
        else{
            guardarservicio({
                nombre_servicio : '',
                precioTotal: 0,
                cantidadCitas: 0
            });
        }
    },[servicioseleccionado]);
    
    const BotonGuardar= e =>{
        e.preventDefault();

        if(servicio.nombre_servicio.trim() === '' || servicio.precioTotal <= 0 || servicio.cantidadCitas <= 0){
            return;
        }

        else{
            if(servicioseleccionado){
                modificarServicio(servicio)
            }

            else{
                agregarServicios(servicio);
            }
        }

        props.history.push('/consultar-servicios');
    }

    const Guardar = e =>{
        guardarservicio({
            ...servicio,
            [e.target.name]: e.target.value
        })
    }
    
    return (  
        <>
            <div className="container mt-4 pfacturas" >
            
                <form onSubmit={BotonGuardar}>
                    <div className=" container fondoFormServicio">
                        
                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label className="font-weight-bold">Nombre del Servicio</label>
                                <input type="text" className="form-control" name="nombre_servicio" value={servicio.nombre_servicio} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label className="font-weight-bold">Precio Total del Servicio</label>
                                <input type="number" className="form-control" name="precioTotal" value={servicio.precioTotal} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label className="font-weight-bold">Cantidad Citas del Servicio</label>
                                <input type="text" className="form-control" name="cantidadCitas" value={servicio.cantidadCitas} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <input type="submit" 
                            className="form-control btnFormServicio font-weight-bold" 
                            value={servicioseleccionado ?("Editar Servicio") :("Crear Servicio")}
                            />
                        </div>
                    </div>          
                </form>
            </div>
        </>
    );
}
 
export default FormularioCrearServicio;