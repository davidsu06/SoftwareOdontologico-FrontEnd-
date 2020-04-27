import React, { useReducer } from 'react';
import serviciosContext from './serviciosContext';
import serviciosReducer from './serviciosReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import { 
    CREAR_SERVICIO,
    LISTAR_SERVICIOS,
    EDITAR_SERVICIO,
    ELIMINAR_SERVICIO,
    SERVICIO_ACTUAL,
    SERVICIO_NULL
 } from '../../types';
 
const ServiciosState = props => {
    
    const initialState = {
        servicios: [],
        servicioseleccionado: null
    }

    const [state, dispatch] = useReducer(serviciosReducer, initialState);

    // Funciones

    //Agrega un Servicio
    const agregarServicios = async servicio => {
        try {
            console.log(servicio);
            const resultado = await clienteAxios.post('/api/servicios', servicio);
             console.log(resultado);
            
            dispatch({
                type: CREAR_SERVICIO,    
                payload: resultado.data
                
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Lista los servicios del sistema
    const listarServicios = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/servicios');
            console.log(resultado);
            dispatch({
                type: LISTAR_SERVICIOS,     
                payload: resultado.data.servicio
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Elimina un Servicio
    const eliminarServicio = async servicioId => {
        console.log(servicioId);
        try {
            
            await clienteAxios.delete(`/api/servicios/${servicioId}`);
            Swal.fire(
                'Eliminado!',
                'El Servicio se ha eliminado correctamente.',
                'success'
              )
            dispatch({
                type: ELIMINAR_SERVICIO,
                payload: servicioId
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    // Seleccionar un Servicio
    const ServicioActual = servicio => {
        dispatch({
            type: SERVICIO_ACTUAL,
            payload: servicio
        })
    }

    //Quitar Servicio Actual
    const ServicioNull = () => {
        dispatch({
            type: SERVICIO_NULL,
            payload: null
        })
    }

    // Modifica un Servicio
    const modificarServicio = async servicio => {
        console.log(servicio)
        try {
            const resultado = await clienteAxios.put(`/api/servicios/${servicio._id}`, servicio);
            console.log(resultado);
            Swal.fire(
                'Correcto',
                'El Servicio se ha modificado correctamente',
                'success'
            )
            
            dispatch({
                type: EDITAR_SERVICIO,
                payload: servicio
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    return (
        <serviciosContext.Provider
            value={{
                servicios: state.servicios,
                servicioseleccionado: state.servicioseleccionado,
                agregarServicios,
                listarServicios,
                eliminarServicio,
                modificarServicio,
                ServicioActual,
                ServicioNull
            }}
        >
            {props.children}
        </serviciosContext.Provider>
    )
}
 
export default ServiciosState;