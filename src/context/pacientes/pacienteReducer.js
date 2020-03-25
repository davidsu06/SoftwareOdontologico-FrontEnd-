import { 
    LISTAR_PACIENTE,
    ELIMINAR_PACIENTE
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case LISTAR_PACIENTE:
            return {
                ...state,
                pacientes: action.payload
            }

        case ELIMINAR_PACIENTE:
            return {
                ...state,
                pacientes: state.pacientes.filter(paciente => paciente.id !== action.payload)
            }
        default:
            return state;
    }
}