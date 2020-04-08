import {
    CREAR_CITA,
    CITA_ACTUAL,
    LISTAR_CITA,
    ELIMINAR_CITA,
    EDITAR_CITA,
    CITA_NULL,
    FILTRAR_CITAS
} from '../../types';

export default (state, action) => {

    switch (action.type) {

        case CREAR_CITA:
            return{
                ...state,
                citas: [...state.citas, action.payload]
            }

        case CITA_ACTUAL:
            return{
                ...state,
                citaseleccionada: action.payload
            }

        case LISTAR_CITA:
            return{
                ...state,
            }

        case FILTRAR_CITAS:
            return{
                ...state,
                searching : true,
                citasfiltradas: state.citas.filter( cita => cita.fecha === action.payload)
            }

        case EDITAR_CITA:
            return{
                ...state,
                //citas: state.citas.filter( cita => cita.id === action.payload.id)
            }

        case ELIMINAR_CITA:
            return{
                ...state,
                citas: state.citas.filter( cita => cita.id != action.payload )
            }

        case CITA_NULL:
            return{
                ...state,
                citaseleccionada: action.payload
            }

        default:
            return state;

    }
}