import React, { useState, useEffect, useContext } from 'react';
import citaContext from '../../context/citas/citaContext';

const FormularioCrearCita = () => {
    
    const citasContext = useContext(citaContext);
    const { citaseleccionada, crearCita, modificarCita } = citasContext;

    const timeStyle = {
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        fontSize: '16px',
        height: 'auto',
        margin: '0',
        outline: '0',
        padding: '15px',
        width: '95%',
        backgroundColor: '#e8eeef',
        color: 'black',
        boxShadow: '0 1px 0 rgba(0,0,0,0.03) inset',
        marginBottom: '30px'
    }

    const [cita, guardarCita] = useState({
        fecha: '',
        hora: '',
        pacienteId: '',
        estado: 'Sin asignar'
    });


    useEffect(() => {
        if (citaseleccionada != null) {
             citaseleccionada.fecha = citaseleccionada.fecha.substr(0,10)
            // citaseleccionada.hora = citaseleccionada.hora.substr(12,19)
            guardarCita(citaseleccionada);
        }else{
            guardarCita({
                fecha: '',
                hora: '',
                pacienteId: '',
                estado: 'Sin asignar'
            })
        }
    }, [citaseleccionada])


    const [error, guardarError] = useState({
        mensaje: ''
    });


    const onChange = e =>{
        guardarCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    }

    const Submit = e => {
        e.preventDefault();

        if (cita.fecha.trim() === '' || cita.hora.trim() === '') {
            guardarError({
                mensaje: 'Todos los campos son obligatorios'
            })
            return;
        }else{
            guardarError({
                mensaje: ''
            })
        }

        if (citaseleccionada != null) 
            modificarCita(cita) 
        else
            crearCita(cita);

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

                {error.mensaje != '' 
                
                ? <div className="alert alert-danger font-weight-bold">{error.mensaje}</div> 

                : null}

                <div className="form-group">
                    <label className="font-weight-bold text-white">Elija una fecha</label>
                    <input type="date" name="fecha" value={cita.fecha} onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <label className="font-weight-bold text-white">Digite una hora</label>
                    <input type="time" style={timeStyle}  name="hora" value={cita.hora} onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <input type="submit" className="form-control boton font-weight-bold"
                    value = { citaseleccionada ? 'Editar cita' : 'Crear cita'}></input>
                </div>
                

            </form>

        </div>
        </>
      );
}
 
export default FormularioCrearCita;