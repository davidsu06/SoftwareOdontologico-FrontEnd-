import { 
    CREAR_SERVICIO,
    LISTAR_SERVICIOS,
    EDITAR_SERVICIO,
    ELIMINAR_SERVICIO,
    SERVICIO_ACTUAL,
    SERVICIO_NULL
 } from '../../types';


const servicioReducer = (state, action) => {
    switch(action.type) {

        case CREAR_SERVICIO:
            return {
                ...state,
                servicios: [action.payload, ...state.servicios]
            }

        case LISTAR_SERVICIOS:
            return {
                ...state,
                servicios: action.payload
            }

        case SERVICIO_ACTUAL:    
        return {
            ...state,
            servicioseleccionado: action.payload
        }    

        case EDITAR_SERVICIO:
            return {
                ...state,
                servicios: state.servicios.map( servicio => servicio._id === action.payload._id ?action.payload :servicio)
            }  
        
        case SERVICIO_NULL:
            return{
                ...state,
                servicioseleccionado: action.payload
            }

        case ELIMINAR_SERVICIO:
            return {
                ...state,
                servicios: state.servicios.filter(servicio => servicio._id !== action.payload)
            }

        default:
            return state;
    }
};

export default servicioReducer;
