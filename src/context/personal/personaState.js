import React, { useReducer } from 'react';
import personaContext from './personaContext';
import personaReducer from './personaReducer';

import { LISTAR_PERSONA, ELIMINAR_PERSONA } from '../../types';


const PersonaState = props => {
    const personal = [
        {id: 1, nombre: "Jojan Santiago Guzman Sierra"},
        {id: 2, nombre: "David Andres Soto"},
        {id: 3, nombre: "Juan Jose Gonzalez"},
        {id: 4, nombre: "Jefferson Echavarria"}
    ]
    const initialState = {
        personal: []
    }

    const [state, dispatch] = useReducer(personaReducer, initialState);

    // Funciones

    const listarPersonal = () => {
        dispatch({
            type: LISTAR_PERSONA,
            payload: personal
    })}

    const eliminarPersona = id => {
        dispatch({
            type: ELIMINAR_PERSONA,
            payload: id
        })
    }

    return (
        <personaContext.Provider
            value={{
                personal: state.personal,
                listarPersonal,
                eliminarPersona
            }}
        >
            {props.children}
        </personaContext.Provider>
    )
}
 
export default PersonaState;