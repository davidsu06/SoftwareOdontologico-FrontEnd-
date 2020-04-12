import React,{useState,useContext} from 'react';
import serviciosContext from '../../context/servicios/serviciosContext';
const FormularioCrearServicio = () => {
    const [servicio,guardarservicio]= useState({
        nombre_servicio : ""
    });

    const servicioContext = useContext(serviciosContext);
    const {agregarServicios} = servicioContext;
    
    const BotonGuardar= e =>{
        e.preventDefault();
        agregarServicios(servicio);
    }

    const Guardar= e =>{
        guardarservicio({
            ...servicio,
            [e.target.name]: e.target.value
        })
    }
    
    return (  
        <>
        <div className="container mt-4 pfacturas" >
        
        <form onSubmit={BotonGuardar}>

            <div className="form-group">
                <label className="font-weight-bold">NOMBRE DEL SERVICIO</label>
                <input type="text" className="form-control" name="nombre_servicio" onChange={Guardar}/>
            </div> 

            <div className="form-group">
                <input type="submit" 
                className="form-control boton font-weight-bold" 
                value="Crear Servicio"
                />
            </div>           
        </form>
    </div>
    </>
    );
}
 
export default FormularioCrearServicio;