import React, { useReducer } from 'react';
import citaContext from './citaContext';
import citaReducer from './citaReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';


import {
    CREAR_CITA,
    CITA_ACTUAL,
    LISTAR_CITA,
    ELIMINAR_CITA,
    CITA_NULL,
    EDITAR_CITA,
    FILTRAR_CITAS,
    CITAS_PACIENTE_CALENDARIO,
    CITA_ASIGNADA,
    CITAS_PACIENTE,
    CITA_EXISTENTE,
    SOLICITAR_CITA
} from '../../types';


const CitaState = props => {

    const initialState = {
        citas: [],
        citaseleccionada: null,
        citasfiltradas: [],
        citasPaciente:[],
        citasfiltradasPaciente:[],
        searching: false,
        citasignada:{},
        citaexistente: false
    }

    const [state,dispatch] = useReducer(citaReducer, initialState);

    const crearCita = async cita => {
        try {
            await clienteAxios.post('/api/citas', cita);
            Swal.fire(
                'Correcto',
                'La cita se ha creado correctamente',
                'success'
            )
            
             dispatch({
                type: CREAR_CITA,
                payload: cita
            })
        } catch (error) {
            console.log(error.response);                
        }
    }


    const CitaActual = cita => {
        dispatch({
            type: CITA_ACTUAL,
            payload: cita
        })
    }

    const listarCitas = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/citas');
            
            dispatch({
                type: LISTAR_CITA,
                payload: resultado.data.citas.filter(cita => cita.estado !== 'Cumplida' && cita.tipo === 'Tratamiento')
            })
        } catch (error) {
            console.log(error);                
        }
    }

    const citaExistentePaciente = async (pacienteId, tipo) => {
        try {
            const resultado = await clienteAxios.get(`/api/citas/${pacienteId}/${tipo}`);
            let bool = false;
            if (resultado.data.cita.length > 0) {
                bool = true;
            }
            dispatch({
                type: CITA_EXISTENTE,
                payload: bool
            })

        } catch (error) {
            console.log(error.response);                
        }
    }

    const filtrarCitas = fecha => {
        dispatch({
            type: FILTRAR_CITAS,
            payload: fecha
        })
    }

    const CitasPacienteCalendario = fecha => {
        dispatch({
            type: CITAS_PACIENTE_CALENDARIO,
            payload: fecha
        })
    }

    const modificarCita = async cita => {
        try {
            await clienteAxios.put(`/api/citas/${cita._id}`, cita);
                        
            dispatch({
                type: EDITAR_CITA,
                payload: cita
            })
            listarCitas()
        }catch (error) {
            console.log(error.response);
            
        }
    }

    const solicitarCita = async cita => {
        try {
            await clienteAxios.put(`/api/citas/${cita._id}`, cita);
                        
            dispatch({
                type: SOLICITAR_CITA,
                payload: cita
            })
            listarCitas()
        }catch (error) {
            console.log(error.response);
            
        }
    }

    const eliminarCita = async citaid => {
        try {
            await clienteAxios.delete(`/api/citas/${citaid}`);
            Swal.fire(
                'Eliminada!',
                'La cita se ha eliminado correctamente.',
                'success'
              )
            dispatch({
                type: ELIMINAR_CITA,
                payload: citaid
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    const CitaNull = () => {
        dispatch({
            type: CITA_NULL,
            payload: null
        })
    }

    const CitaAsignada = cita => {
        dispatch({
            type: CITA_ASIGNADA,
            payload: cita
        })
    }

    const listarCitasPaciente = async pacienteId => {

        await listarCitas();

        dispatch({
            type: CITAS_PACIENTE,
            payload: pacienteId
        })
    }

    return(
        <citaContext.Provider
            value={{
                citas: state.citas,
                citaseleccionada: state.citaseleccionada,
                citasfiltradas: state.citasfiltradas,
                citasPaciente: state.citasPaciente,
                citasfiltradasPaciente: state.citasfiltradasPaciente,
                searching: state.searching,
                citasignada: state.citasignada,
                citaexistente: state.citaexistente,
                crearCita,
                CitaActual,
                listarCitas,
                citaExistentePaciente,
                filtrarCitas,
                CitasPacienteCalendario,
                modificarCita,
                eliminarCita,
                CitaNull,
                CitaAsignada,
                listarCitasPaciente,
                solicitarCita
                // asignarCita
            }}
        >
            {props.children}
        </citaContext.Provider>
    )

}

export default CitaState;