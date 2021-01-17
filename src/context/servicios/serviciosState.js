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
    const agregarServicios = async (servicio, file) => {
        try {
            const formData = new FormData();
            formData.append('file', file)

            const imagen = await clienteAxios.post('/api/cloudinary', formData);
            servicio.imagen = imagen.data.result.url;
            await clienteAxios.post('/api/servicios', servicio);

             Swal.fire(
                'Correcto',
                'El Servicio se ha creado correctamente',
                'success'
            )
            
            dispatch({
                type: CREAR_SERVICIO,    
                payload: servicio
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Lista los servicios del sistema
    const listarServicios = async () => {
        try {
            const resultado = await clienteAxios.get('/api/servicios');
            dispatch({
                type: LISTAR_SERVICIOS,     
                payload: resultado.data.servicio
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Elimina un Servicio
    const eliminarServicio = async servicio => {
        try {
            const nameFile = servicio.imagen.substring( servicio.imagen.lastIndexOf('/') + 1);
            const lengthFormato = servicio.imagen.substring(servicio.imagen.lastIndexOf('.')).length;
            const public_id = `odontoapp/${nameFile.substring( 0 , nameFile.length - lengthFormato)}`

            await clienteAxios.delete(`/api/servicios/${servicio._id}`);
            await clienteAxios.delete(`/api/cloudinary`, { params: { public_id } });

            Swal.fire(
                'Eliminado!',
                'El Servicio se ha eliminado correctamente.',
                'success'
            );
            
            dispatch({
                type: ELIMINAR_SERVICIO,
                payload: servicio._id
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
    const modificarServicio = async (servicio, file) => {
        try {

            if(file){
                const formData = new FormData();
                formData.append('file', file)

                const nameFile = servicio.imagen.substring( servicio.imagen.lastIndexOf('/') + 1);
                const lengthFormato = servicio.imagen.substring(servicio.imagen.lastIndexOf('.')).length;
                const public_id = `odontoapp/${nameFile.substring( 0 , nameFile.length - lengthFormato)}`

                await clienteAxios.delete(`/api/cloudinary`, { params: { public_id } } );

                const imagen = await clienteAxios.post('/api/cloudinary', formData);
                servicio.imagen = imagen.data.result.url;
            }
            
            await clienteAxios.put(`/api/servicios/${servicio._id}`, servicio);
           
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