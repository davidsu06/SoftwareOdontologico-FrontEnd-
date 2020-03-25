import { 
    LISTAR_PERSONA,
    ELIMINAR_PERSONA
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case LISTAR_PERSONA:
            return {
                ...state,
                personal: action.payload
            }

        case ELIMINAR_PERSONA:
            return {
                ...state,
                personal: state.personal.filter(persona => persona.id !== action.payload)
            }
        default:
            return state;
    }
}