import { 
    CREAR_SERVICIO,
    LISTAR_SERVICIO
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case CREAR_SERVICIO:
            
            return {
                ...state,
                servicios: [action.payload, ...state.servicios]
            }

        case LISTAR_SERVICIO:
            
            return {
                ...state,
                servicios: action.payload
            }
        default:
            return state;
    }
}