import { 
    INICIAR_TRATAMIENTO,
    LISTAR_TRATAMIENTOS,
    ACTUALIZAR_TRATAMIENTO,
    ELIMINAR_TRATAMIENTO,
    TRATAMIENTO_ACTUAL,
    TRATAMIENTO_NULL
 } from '../../types';


const tratamientoReducer = (state, action) => {
    switch(action.type) {

        case INICIAR_TRATAMIENTO:
            return {
                ...state,
                tratamientos: [action.payload, ...state.tratamientos]
            }

        case LISTAR_TRATAMIENTOS:
            return {
                ...state,
                tratamientos: action.payload
            }

        case TRATAMIENTO_ACTUAL:    
        return {
            ...state,
            tratamientoseleccionado: action.payload
        }    

        case ACTUALIZAR_TRATAMIENTO:
            return {
                ...state,
                tratamientos: state.tratamientos.map( tratamiento => tratamiento._id === action.payload._id ?action.payload :tratamiento)
            }  
        
        case TRATAMIENTO_NULL:
            return{
                ...state,
                tratamientoseleccionado: action.payload
            }

        case ELIMINAR_TRATAMIENTO:
            return {
                ...state,
                tratamientos: state.tratamientos.filter(tratamiento => tratamiento._id !== action.payload)
            }

        default:
            return state;
    }
};

export default tratamientoReducer;
