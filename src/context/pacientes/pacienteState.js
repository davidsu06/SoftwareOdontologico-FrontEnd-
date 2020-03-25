import React, { useReducer } from 'react';
import pacienteContext from './pacienteContext';
import PacienteReducer from './pacienteReducer';

import { LISTAR_PACIENTE, ELIMINAR_PACIENTE } from '../../types';


const PacienteState = props => {
    const pacientes = [
        {id: 1, nombre: "Jojan Santiago Guzman Sierra"},
        {id: 2, nombre: "Estefania Cordoba"},
        {id: 3, nombre: "Erika Cardona"},
        {id: 4, nombre: "Valentina Valencia"}
    ]
    const initialState = {
        pacientes: []
    }

    const [state, dispatch] = useReducer(PacienteReducer, initialState);

    // Funciones

    const listarPacientes = () => {
        dispatch({
            type: LISTAR_PACIENTE,
            payload: pacientes
    })}

    const eliminarPaciente = id => {
        dispatch({
            type: ELIMINAR_PACIENTE,
            payload: id
        })
    }

    return (
        <pacienteContext.Provider
            value={{
                pacientes: state.pacientes,
                listarPacientes,
                eliminarPaciente
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )
}
 
export default PacienteState;