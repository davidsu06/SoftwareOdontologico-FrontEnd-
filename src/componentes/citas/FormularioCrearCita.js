import React, { useState, useEffect, useContext } from 'react';
import citaContext from '../../context/citas/citaContext';
import Swal from 'sweetalert2';

const FormularioCrearCita = () => {
    
    const citasContext = useContext(citaContext);
    const { citaseleccionada, crearCita, modificarCita } = citasContext;

    const [cita, guardarCita] = useState({
        fecha: '',
        hora: '',
        pacienteId: '0'
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

        if (cita.fecha.trim() === '' || cita.hora.trim() === '') {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            );
            return;
        }else

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

    return (
        <>
        <div className="container mt-4" >   

            <form onSubmit={Submit}>

                <div className=" container fondoForm">
                <div className="container Formularios">
                <div className="form-group p-0">
                    <label className="font-weight-bold">Elija una fecha</label>
                    <input type="date" className="form-control col-md-11" name="fecha" value={cita.fecha} onChange={onChange}></input>
                </div>
                </div>
                <div className="container Formularios">
                <div className="form-group">
                    <label className="font-weight-bold">Digite una hora</label>
                    <input type="time" className="form-control col-md-11" name="hora" value={cita.hora} onChange={onChange}></input>
                </div>
                </div>
                <div className="form-group ">
                    <input type="submit" className="form-control btnForm font-weight-bold col-md-11"
                    value = { citaseleccionada ? 'Editar cita' : 'Crear cita'}></input>
                </div>
                </div>

            </form>

        </div>
        </>
      );
}
 
export default FormularioCrearCita;