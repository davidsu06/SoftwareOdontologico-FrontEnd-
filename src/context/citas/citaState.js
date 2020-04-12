import React, { useReducer } from 'react';
import citaContext from './citaContext';
import citaReducer from './citaReducer';
import clienteAxios from '../../config/axios';

import {
    CREAR_CITA,
    CITA_ACTUAL,
    LISTAR_CITA,
    ELIMINAR_CITA,
    CITA_NULL,
    EDITAR_CITA,
    FILTRAR_CITAS,
    CITA_ASIGNADA,
    ASIGNAR_CITA,
    CITAS_PACIENTE
} from '../../types';


const CitaState = props => {

    const initialState = {
        citas: [
            // {
            //     id: '1',
            //     fecha: '2020-04-10',
            //     hora: '10:00',
            //     paciente: ''
            // },
            // {
            //     id: '2',
            //     fecha: '2020-05-20',
            //     hora: '12:00',
            //     paciente: ''
            // }
        ],
        citaseleccionada: null,
        citasfiltradas: [],
        searching: false,
        citasignada:{}
    }

    const [state,dispatch] = useReducer(citaReducer, initialState);

    const crearCita = async cita => {
        try {
            console.log(cita);
            
            const resultado = await clienteAxios.post('/api/citas', cita);
             console.log(resultado);
            
             dispatch({
                type: CREAR_CITA,
                payload: cita
            })
        } catch (error) {
            console.log(error);                
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
            console.log(resultado);
            
            dispatch({
                type: LISTAR_CITA,
                payload: resultado.data.citas.filter(cita => cita.estado !== 'Cumplida')
            })
        } catch (error) {
            console.log(error);                
        }
    }

    const filtrarCitas = fecha => {
        dispatch({
            type: FILTRAR_CITAS,
            payload: fecha
        })
    }

    const modificarCita = async cita => {
        try {
            const resultado = await clienteAxios.put(`/api/citas/${cita._id}`, cita);
            console.log(resultado);
            
            dispatch({
                type: EDITAR_CITA,
                payload: cita
            })
        }catch (error) {
            console.log(error);
            
        }
    }

    const eliminarCita = async citaid => {
        try {
            await clienteAxios.delete(`/api/citas/${citaid}`);
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

    // const asignarCita = async cita => {
        
    //     try {
    //         const resultado = await clienteAxios.put(`/api/citas/${cita._id}`, cita);
    //         console.log(resultado);
            
    //         dispatch({
    //             type: ASIGNAR_CITA,
    //             payload: cita
    //         })
    //     }catch (error) {
    //         console.log(error);
            
    //     }
    // }

    return(
        <citaContext.Provider
            value={{
                citas: state.citas,
                citaseleccionada: state.citaseleccionada,
                citasfiltradas: state.citasfiltradas,
                searching: state.searching,
                citasignada: state.citasignada,
                crearCita,
                CitaActual,
                listarCitas,
                filtrarCitas,
                modificarCita,
                eliminarCita,
                CitaNull,
                CitaAsignada,
                listarCitasPaciente,
                // asignarCita
            }}
        >
            {props.children}
        </citaContext.Provider>
    )

}

export default CitaState;

