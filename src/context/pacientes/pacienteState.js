import React, { useReducer } from 'react';
import pacienteContext from './pacienteContext';
import PacienteReducer from './pacienteReducer';
import clienteAxios from '../../config/axios';

import { LISTAR_PACIENTE, ELIMINAR_PACIENTE } from '../../types';


const PacienteState = props => {
    
    const initialState = {
        pacientes: []
    }

    const [state, dispatch] = useReducer(PacienteReducer, initialState);

    // Funciones

    const listarPacientes = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/pacientes');
            dispatch({
                type: LISTAR_PACIENTE,     
                payload: resultado.data.pacientes
            })
        } catch (error) {
            console.log(error);                
        }
    }

    const eliminarPaciente = async pacienteId => {
        console.log(pacienteId);
        try {
            await clienteAxios.delete(`/api/pacientes/${pacienteId}`);
            dispatch({
                type: ELIMINAR_PACIENTE,
                payload: pacienteId
            })
        }catch (error) {
            console.log(error);
            
        }
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