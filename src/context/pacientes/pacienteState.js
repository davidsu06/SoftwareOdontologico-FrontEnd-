import React, { useReducer } from 'react';
import pacienteContext from './pacienteContext';
import PacienteReducer from './pacienteReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import { 
    LISTAR_PACIENTE,
    EDITAR_PACIENTE,
    ELIMINAR_PACIENTE,
    AGREGAR_PACIENTE,
    PACIENTE_NULL,
    PACIENTE_ACTUAL 
} from '../../types';


const PacienteState = props => {
    
    const initialState = {
        pacientes: [],
        pacienteseleccionado: null
    }

    const [state, dispatch] = useReducer(PacienteReducer, initialState);

    // Funciones

    const agregarPacientes = async paciente => {
        // console.log(paciente);
        try {
            const resultado = await clienteAxios.post('/api/pacientes', paciente);
            console.log(resultado)
            Swal.fire(
                'Correcto',
                'El paciente se agrego correctamente',
                'success'
            )
            
            dispatch({
                type: AGREGAR_PACIENTE,    
                payload: paciente
                
            })
        } catch (error) {
            console.log(error);                
        }
    }


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
            Swal.fire(
                'Eliminado!',
                'El paciente se ha eliminado correctamente.',
                'success'
              )
            dispatch({
                type: ELIMINAR_PACIENTE,
                payload: pacienteId
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    // Seleccionar un paciente
    const PacienteActual = paciente => {
        dispatch({
            type: PACIENTE_ACTUAL,
            payload: paciente
        })
    }

    const PacienteNull = () => {
        dispatch({
            type: PACIENTE_NULL,
            payload: null
        })
    }

    // Modifica un paciente

    const modificarPaciente = async paciente => {
        console.log(paciente)
        try {
            const resultado = await clienteAxios.put(`/api/pacientes/${paciente._id}`, paciente);
            console.log(resultado);
            Swal.fire(
                'Correcto',
                'El paciente se edito correctamente',
                'success'
            )
            
            dispatch({
                type: EDITAR_PACIENTE,
                payload: paciente
            })
        }catch (error) {
            console.log(error);
            
        }
    }



    return (
        <pacienteContext.Provider
            value={{
                pacientes: state.pacientes,
                pacienteseleccionado: state.pacienteseleccionado,
                listarPacientes,
                eliminarPaciente,
                agregarPacientes,
                PacienteActual,
                PacienteNull,
                modificarPaciente
                
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )
}
 
export default PacienteState;