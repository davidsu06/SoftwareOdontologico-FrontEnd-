import React, {useState,useContext, useEffect} from 'react';
import serviciosContext from '../../context/servicios/serviciosContext';
import Error from './../admin/Error';
import Swal from 'sweetalert2';

const FormularioCrearServicio = ({props}) => {

    const servicioContext = useContext(serviciosContext);
    const {servicioseleccionado,agregarServicios, modificarServicio} = servicioContext;

    const [servicio,guardarservicio]= useState({
        nombre_servicio : '',
        precioTotal: 0,
        cantidadCitas: '',
    });

    const [file, guardarFile] = useState(null);

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
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

    const submit= e =>{
        e.preventDefault();

        if (servicio.nombre_servicio.trim() === "" && servicio.precioTotal <= 0 && servicio.cantidadCitas <= 0 && file === null) {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            );
            return;
        }

        if(servicio.nombre_servicio.trim()=== ""){
            guardarError({
                Mensaje: 'Ingrese el nombre',
                bandera: true
            })
            return;
        }
        if(servicio.precioTotal <= 0){
            guardarError({
                Mensaje: 'Ingrese un precio total válido',
                bandera: true
            })
            return;
        }
        if(servicio.cantidadCitas <= 0){
            guardarError({
                Mensaje: 'Ingrese una cantidad de citas válida',
                bandera: true
            })
            return;
        }
        if(file === null && !servicioseleccionado){
            guardarError({
                Mensaje: 'Adjunte una imagen para el servicio',
                bandera: true
            })
            return;
        }

        else{
            if(servicioseleccionado){
                modificarServicio(servicio, file);
            }

            else{
                agregarServicios(servicio, file);
            }
        }

        props.history.push('/consultar-servicios');
    }

    const Guardar = e =>{
        guardarservicio({
            ...servicio,
            [e.target.name]: e.target.value
        })
        guardarError({
            Mensaje: 'Hubo Error',
            bandera: false
        })
    }

    const handleChangeFile = (e) => {
        const file = e.target.files[0]; 
        guardarFile(file);
    }
        
    return (  
        <>
            <div className="container mt-4 pfacturas" >
            
                <form onSubmit={submit}>
                    <div className=" container fondoForm">
                        
                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Nombre del Servicio</label>
                                <input type="text" className="form-control" name="nombre_servicio" value={servicio.nombre_servicio} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Precio Total del Servicio</label>
                                <input type="number" className="form-control" name="precioTotal" value={servicio.precioTotal} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Cantidad Citas del Servicio</label>
                                <input type="text" className="form-control" name="cantidadCitas" value={servicio.cantidadCitas} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center Formularios">
                            <div className="form-group">
                                <label className="font-weight-bold">Imagen Servicio</label>
                                <input type="file" className="form-control" name="file" accept="image/*" onChange={handleChangeFile}/>
                            </div> 
                        </div>

                        <div className="form-group pl-3">
                            {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
                        </div> 

                        <div className="form-group ml-1">
                            <input type="submit" 
                            className="form-control btnForm font-weight-bold"
                            style={{ width: '95%' }} 
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