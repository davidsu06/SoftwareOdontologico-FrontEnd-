import React, { useReducer } from 'react';
import serviciosContext from './serviciosContext';
import serviciosReducer from './serviciosReducer';
import clienteAxios from '../../config/axios';

import { 
    CREAR_SERVICIO,
    LISTAR_SERVICIO
 } from '../../types';
 
const ServiciosState = props => {
    
    const initialState = {
        servicios: [],
        servicioseleccionado: null
    }

    const [state, dispatch] = useReducer(serviciosReducer, initialState);

    // Funciones

    const agregarServicios = async servicios => {
        // console.log(paciente);
        try {
            console.log(servicios);
            const resultado = await clienteAxios.post('/api/servicios', servicios);
             console.log(resultado);
            
            dispatch({
                type: CREAR_SERVICIO,    
                payload: resultado.data
                
            })
        } catch (error) {
            console.log(error);                
        }
    }


    const listarServicios = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/servicios');
            dispatch({
                type: LISTAR_SERVICIO,     
                payload: resultado.data.servicio
            })
        } catch (error) {
            console.log(error);                
        }
    }

    return (
        <serviciosContext.Provider
            value={{
                servicios: state.servicios,
                servicioseleccionado: state.servicioseleccionado,
                agregarServicios,
                listarServicios
            }}
        >
            {props.children}
        </serviciosContext.Provider>
    )
}
 
export default ServiciosState;