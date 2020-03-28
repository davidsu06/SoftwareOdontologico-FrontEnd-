import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR

 } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case REGISTRO_ERROR:
            return{
                ...state,
                token: null,
                mensaje: action.payload
            }

        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null
            }
        default:
            return state;
    }
}