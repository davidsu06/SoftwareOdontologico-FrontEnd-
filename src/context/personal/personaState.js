import React, { useReducer } from 'react';
import personaContext from './personaContext';
import personaReducer from './personaReducer';
import clienteAxios from '../../config/axios';

import { LISTAR_PERSONA, PERSONAL_ACTUAL, AGREGAR_PERSONAL, EDITAR_PERSONAL, PERSONA_NULL, ELIMINAR_PERSONA } from '../../types';


const PersonaState = props => {

    const initialState = {
        personal: [],
        personalseleccionado: null
    }

    const [state, dispatch] = useReducer(personaReducer, initialState);

    // Funciones

    const listarPersonal = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/personal');
            dispatch({
                type: LISTAR_PERSONA,
                payload: resultado.data.personal
            })
        } catch (error) {
            console.log(error.response);
        }
    }
    
    const PersonalActual = personal => {
        dispatch({
            type: PERSONAL_ACTUAL,
            payload: personal
        })
    }

    const PersonaNull = () =>{
        dispatch({
            type: PERSONA_NULL,
            payload: null
        })
    }

    const agregarPersonal = async persona => {
        
        try {
            const resultado = await clienteAxios.post('/api/personal', persona);
            console.log(resultado);
            dispatch({
                type: AGREGAR_PERSONAL,
                payload: persona
            })
        } catch (error) {
            console.log(error.response);
        }

    }

    const editarPersonal = async persona => {
        
        try {
            const resultado = await clienteAxios.put(`/api/personal/${persona._id}`, persona);
            dispatch({
                type: EDITAR_PERSONAL,
                payload: resultado.data.personal
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const eliminarPersona = async id => {
        try {
            await clienteAxios.delete(`api/personal/${id}`)
            dispatch({
                type: ELIMINAR_PERSONA,
                payload: id
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <personaContext.Provider
            value={{
                personal: state.personal,
                personalseleccionado: state.personalseleccionado,
                listarPersonal,
                PersonalActual,
                agregarPersonal,
                editarPersonal,
                PersonaNull,
                eliminarPersona
            }}
        >
            {props.children}
        </personaContext.Provider>
    )
}
 
export default PersonaState;