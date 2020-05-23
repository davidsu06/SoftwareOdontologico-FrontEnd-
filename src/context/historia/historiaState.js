import React, { useReducer } from 'react';
import historiaContext from './historiaContext';
import historiaReducer from './historiaReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import {
    LISTAR_HISTORIA,
    AGREGAR_HISTORIA,
    MODIFICAR_HISTORIA,
    HISTORIA_ACTUAL,
    HISTORIA_NULL,
    HISTORIAS_FILTRADAS
} from '../../types';


const HistoriaState = props => {

    const initialState = {
        historias: [],
        historiaseleccionado: null,
        historiasfiltradas: []
    }

    const [state,dispatch] = useReducer(historiaReducer, initialState);

    //Funciones
    const crearHistoria = async historia =>{
        try {
            await clienteAxios.post('/api/historias', historia);
            Swal.fire(
                'Correcto',
                'La historia se ha creado correctamente',
                'success'
            )
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
            await clienteAxios.put(`/api/historias/${_id}`, historia);
            Swal.fire(
                'Correcto',
                'La historia se ha modificado correctamente',
                'success'
            )
            
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

    const filtrarHistorias = historias => {
        dispatch({
            type: HISTORIAS_FILTRADAS,
            payload: historias
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
                historiasfiltradas: state.historiasfiltradas,
                crearHistoria,
                listarHistoria,
                HistoriaActual,
                HistoriaNull,
                modificarHistoria,
                filtrarHistorias
            }}
        >
            {props.children}
        </historiaContext.Provider>
    )

}

export default HistoriaState;

