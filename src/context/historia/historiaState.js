import React, { useReducer } from 'react';
import historiaContext from './historiaContext';
import historiaReducer from './historiaReducer';
import clienteAxios from '../../config/axios';

import {
    LISTAR_HISTORIA,
    AGREGAR_HISTORIA,
    MODIFICAR_HISTORIA,
    HISTORIA_ACTUAL,
    HISTORIA_NULL
} from '../../types';


const HistoriaState = props => {

    const initialState = {
        historias: [],
        historiaseleccionado: null
    }

    const [state,dispatch] = useReducer(historiaReducer, initialState);

    //Funciones
    const crearHistoria = async historia =>{
        try {
            const respuesta = await clienteAxios.post('/api/historias', historia);
            console.log(respuesta)
            dispatch({
                type: AGREGAR_HISTORIA,
                payload: historia
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const listarHistoria = async () =>{
        try {
            const respuesta = await clienteAxios.get('/api/historias');
            console.log(respuesta)
            dispatch({
                type: LISTAR_HISTORIA,
                payload: respuesta.data.historias
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const modificarHistoria = async historial => {
        try {
            const {_id, historia} = historial;
            const resultado = await clienteAxios.put(`/api/historias/${_id}`, historia);
            console.log(resultado);
            
            dispatch({
                type: MODIFICAR_HISTORIA,
                payload: historia
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    const HistoriaActual = historia => {
        dispatch({
            type: HISTORIA_ACTUAL,
            payload: historia
        })
    }

    const HistoriaNull = () => {
        dispatch({
            type: HISTORIA_NULL,
            payload: null
        })
    }
 
    return(
        <historiaContext.Provider
            value={{
                historias: state.historias,
                historiaseleccionado: state.historiaseleccionado,
                crearHistoria,
                listarHistoria,
                HistoriaActual,
                HistoriaNull,
                modificarHistoria
            }}
        >
            {props.children}
        </historiaContext.Provider>
    )

}

export default HistoriaState;

