import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    CERRAR_SESION

} from '../../types';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const regisrarPaciente = async datos => {
        try {
            await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO
            })
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR
            })
        }
    }

    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get(`/api/auth`);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.tipoUsuario
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const iniciarSesion = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado();
        } catch (error) {
            const alerta ={
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const sesionUsuario = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get(`/api/auth`);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }
    
    //Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado, 
                usuario: state.usuario,
                mensaje: state.mensaje,
                regisrarPaciente,
                usuarioAutenticado,
                iniciarSesion,
                sesionUsuario,
                cerrarSesion,
            }}
        >
            {props.children}
        </AuthContext.Provider>

    )

 }

 export default AuthState;

