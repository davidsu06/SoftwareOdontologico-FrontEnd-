import {
    LISTAR_HISTORIA,
    AGREGAR_HISTORIA,
    MODIFICAR_HISTORIA,
    HISTORIA_ACTUAL,
    HISTORIA_NULL
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        case AGREGAR_HISTORIA:
            return {
                ...state,
                historias: [action.payload, ...state.historias]
            }

        case HISTORIA_ACTUAL:
        return{
            ...state,
            historiaseleccionado: action.payload
        }

        case LISTAR_HISTORIA:
            return{
                ...state,
                historias: action.payload
            }

        case MODIFICAR_HISTORIA:
        return{
            ...state,
            historias: state.historias.filter( historia => historia._id === action.payload._id)
        }

        case HISTORIA_NULL:
            return{
                ...state,
                historiaseleccionado: action.payload
            }

        default:
            return state;

    }
}