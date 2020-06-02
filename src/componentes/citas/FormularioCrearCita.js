import React, { useState, useEffect, useContext } from 'react';
import citaContext from '../../context/citas/citaContext';
import Swal from 'sweetalert2';
import Error from './../admin/Error';

const FormularioCrearCita = () => {
    
    const citasContext = useContext(citaContext);
    const { citaseleccionada, crearCita, modificarCita } = citasContext;

    const [cita, guardarCita] = useState({
        fecha: '',
        hora: '',
        pacienteId: '0'
    });

    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    }); 

    useEffect(() => {
        if (citaseleccionada != null) {
             citaseleccionada.fecha = citaseleccionada.fecha.substr(0,10)
            guardarCita(citaseleccionada);
        }else{
            guardarCita({
                fecha: '',
                hora: '',
                pacienteId: '0',
            })
        }
    }, [citaseleccionada])


    const onChange = e =>{
        guardarCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    }

    const Submit = e => {
        e.preventDefault();

        if (cita.fecha.trim() === '' && cita.hora.trim() === '') {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            );
            return;
        }
        if(cita.fecha.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese la fecha de la cita',
                bandera: true
            })
            return;
        }
        if(cita.hora.trim() === ''){
            guardarError({
                Mensaje: 'Ingrese la hora de la cita',
                bandera: true
            })
            return;
        }
        
        else{
            if (citaseleccionada != null) 
            {
                modificarCita(cita)
                Swal.fire(
                    'Correcto',
                    'La cita se ha modificado correctamente',
                    'success'
                ) 
            }
            else{
                cita.estado = 'Sin asignar'
                cita.tipo = 'No Definida'
                crearCita(cita);
            }
    
            guardarCita({
                ...cita,
                fecha: '',
                hora: '',
            })    
        }
    }

    return (
        <>
            <div className="container mt-4" >   
                <form onSubmit={Submit}>
                    <div className="row container">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="font-weight-bold">Fecha:</label>
                                <input type="date" className="form-control col-md-11" name="fecha" value={cita.fecha} onChange={onChange}></input>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="font-weight-bold">Hora:</label>
                                <input type="time" className="form-control col-md-11" name="hora" value={cita.hora} onChange={onChange}></input>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group ml-3" style={{width:'81.2%'}}>
                        {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
                    </div>
                

                    <div className="ml-2">
                        <input type="submit" className="form-control btnForm font-weight-bold"
                            value = { citaseleccionada ? 'Editar cita' : 'Crear cita'}
                            style={{width:'83%'}}
                        />
                    </div>
                        
                </form>
            </div>
        </>
      );
}
 
export default FormularioCrearCita;