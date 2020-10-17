import React, {useState} from 'react';

const FormularioCrearServicio = () => {
    const [servicio,guardarservicio]= useState({
        nombre_servicio : '',
        precioTotal: 0,
        cantidadCitas: '',
    });

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    }); 

    const submit= e =>{
        e.preventDefault();

        if (servicio.nombre_servicio.trim() === "" && servicio.precioTotal <= 0 && servicio.cantidadCitas <= 0 && file === null) {
                guardarError({
                Mensaje: 'Todos los campos son obligatorios',
                bandera: true
            })
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
        
    return (  
        <>
            <div className="container mt-4 pfacturas" >
            
                <form onSubmit={submit}>
                    <div className=" container fondoFormServicio">
                        
                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label data-testid='NomServ' className="font-weight-bold">Nombre del Servicio</label>
                                <input type="text" data-testid='test-nombreserv' className="form-control" name="nombre_servicio" value={servicio.nombre_servicio} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label className="font-weight-bold PrecioServ">Precio Total del Servicio</label>
                                <input type="number" data-testid='test-precio' className="form-control" name="precioTotal" value={servicio.precioTotal} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="container align-content-center formularioservicio">
                            <div className="form-group">
                                <label className="font-weight-bold CantCitas">Cantidad Citas del Servicio</label>
                                <input type="text" data-testid='test-cantidadcitas' className="form-control" name="cantidadCitas" value={servicio.cantidadCitas} onChange={Guardar}/>
                            </div> 
                        </div>

                        <div className="form-group pl-3">
                                { error.bandera && (
                                    <p data-testid='error-message' className='error-message'>Hubo un error</p>
                                ) }
                        </div> 

                        <div className="form-group">
                        
                            <input type="submit" 
                            data-testid='btn-submit' className="form-control btnFormServicio font-weight-bold" 
                            value={"Crear Servicio"}
                            />
                        </div>
                    </div>          
                </form>
            </div>
        </>
    );
}
export default FormularioCrearServicio;