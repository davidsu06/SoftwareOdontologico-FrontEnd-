import React, { useReducer } from 'react';
import tratamientoContext from './tratamientoContext';
import tratamientoReducer from './tratamientoReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import { 
    INICIAR_TRATAMIENTO,
    LISTAR_TRATAMIENTOS,
    ACTUALIZAR_TRATAMIENTO,
    ELIMINAR_TRATAMIENTO,
    TRATAMIENTO_ACTUAL,
    TRATAMIENTO_NULL
 } from '../../types';
 
const TratamientoState = props => {
    
    const initialState = {
        tratamientos: [],
        tratamientoseleccionado: null
    }

    const [state, dispatch] = useReducer(tratamientoReducer, initialState);

    // Funciones

    //Inicia un Tratamiento
    const iniciarTratamiento = async tratamiento => {
        try {
            const resultado = await clienteAxios.post('/api/tratamientos', tratamiento);
             console.log(resultado);
             Swal.fire(
                'Correcto',
                'El Tratamiento se ha creado correctamente',
                'success'
            )
            
            dispatch({
                type: INICIAR_TRATAMIENTO,    
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Lista los Tratamientos del sistema
    const listarTratamientos = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/tratamientos');
            console.log(resultado);
            dispatch({
                type: LISTAR_TRATAMIENTOS,     
                payload: resultado.data.tratamientos
            })
        } catch (error) {
            console.log(error);                
        }
    }

    //Actualiza un tratamiento
    const actualizarTratamiento = async tratamiento => {
        console.log(tratamiento)
        try {
            const resultado = await clienteAxios.put(`/api/tratamientos/${tratamiento._id}`, tratamiento);
            console.log(resultado);
            
            dispatch({
                type: ACTUALIZAR_TRATAMIENTO,
                payload: tratamiento
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    //Elimina un Tratamiento
    const eliminarTratamiento = async tratamientoId => {
        console.log(tratamientoId);
        try {
            
            await clienteAxios.delete(`/api/tratamientos/${tratamientoId}`);
            Swal.fire(
                'Eliminado!',
                'El Tratamiento se ha eliminado correctamente.',
                'success'
              )
            dispatch({
                type: ELIMINAR_TRATAMIENTO,
                payload: tratamientoId
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    // Seleccionar un Servicio
    const tratamientoActual = servicio => {
        dispatch({
            type: TRATAMIENTO_ACTUAL,
            payload: servicio
        })
    }

    //Quitar Servicio Actual
    const tratamientoNull = () => {
        dispatch({
            type: TRATAMIENTO_NULL,
            payload: null
        })
    }

    return (
        <tratamientoContext.Provider
            value={{
                tratamientos: state.tratamientos,
                tratamientoseleccionado: state.tratamientoseleccionado,
                iniciarTratamiento,
                listarTratamientos,
                eliminarTratamiento,
                actualizarTratamiento,
                tratamientoActual,
                tratamientoNull
            }}
        >
            {props.children}
        </tratamientoContext.Provider>
    )
}
 
export default TratamientoState;