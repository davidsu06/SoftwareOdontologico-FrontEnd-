import { 
    LISTAR_PERSONA,
    PERSONAL_ACTUAL,
    AGREGAR_PERSONAL,
    EDITAR_PERSONAL,
    PERSONA_NULL,
    ELIMINAR_PERSONA
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case AGREGAR_PERSONAL:
            
            return {
                ...state,
                personal: [action.payload, ...state.personal]
            }

        case LISTAR_PERSONA:
            return {
                ...state,
                personal: action.payload
            }

        case PERSONAL_ACTUAL:    
        return {
            ...state,
            personalseleccionado: action.payload
        }    

        case EDITAR_PERSONAL:
            return {
                ...state,
                personal: state.personal.map( personal => personal._id === action.payload._id ?action.payload :personal)
        }  

        case ELIMINAR_PERSONA:
            return {
                ...state,
                personal: state.personal.filter(persona => persona._id !== action.payload)
            }
        case PERSONA_NULL:
            return {
                ...state,
                personalseleccionado: action.payload
            }
        default:
            return state;
    }
}