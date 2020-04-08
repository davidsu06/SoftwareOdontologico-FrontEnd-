import React, { useReducer } from 'react';
import citaContext from './citaContext';
import citaReducer from './citaReducer';

import {
    CREAR_CITA,
    CITA_ACTUAL,
    LISTAR_CITA,
    ELIMINAR_CITA,
    CITA_NULL,
    EDITAR_CITA,
    FILTRAR_CITAS
} from '../../types';


const CitaState = props => {

    const initialState = {
        citas: [
            {
                id: '1',
                fecha: '2020-04-10',
                hora: '10:00'
            },
            {
                id: '2',
                fecha: '2020-05-20',
                hora: '12:00'
            }
        ],
        citaseleccionada: null,
        citasfiltradas: [],
        searching: false
    }

    const [state,dispatch] = useReducer(citaReducer, initialState);

    const crearCita = cita => {
        dispatch({
            type: CREAR_CITA,
            payload: cita
        })
    }

    const CitaActual = cita => {
        dispatch({
            type: CITA_ACTUAL,
            payload: cita
        })
    }

    const listarCitas = () => {
        dispatch({
            type: LISTAR_CITA,
        })
    }

    const filtrarCitas = fecha => {
        dispatch({
            type: FILTRAR_CITAS,
            payload: fecha
        })
    }

    const editarCita = cita => {
        dispatch({
            type: EDITAR_CITA,
            payload: cita
        })
    }

    const eliminarCita = id => {
        dispatch({
            type: ELIMINAR_CITA,
            payload: id
        })
    }

    const CitaNull = () => {
        dispatch({
            type: CITA_NULL,
            payload: null
        })
    }

    return(
        <citaContext.Provider
            value={{
                citas: state.citas,
                citaseleccionada: state.citaseleccionada,
                citasfiltradas: state.citasfiltradas,
                searching: state.searching,
                crearCita,
                CitaActual,
                listarCitas,
                filtrarCitas,
                editarCita,
                eliminarCita,
                CitaNull
            }}
        >
            {props.children}
        </citaContext.Provider>
    )

}

export default CitaState;

