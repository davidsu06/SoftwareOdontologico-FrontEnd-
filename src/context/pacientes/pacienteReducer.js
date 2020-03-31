import { 
    AGREGAR_PACIENTE,
    LISTAR_PACIENTE,
    ELIMINAR_PACIENTE,
    EDITAR_PACIENTE,
    PACIENTE_NULL,
    PACIENTE_ACTUAL
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case AGREGAR_PACIENTE:
            
            return {
                ...state,
                pacientes: [action.payload, ...state.pacientes]
            }

        case LISTAR_PACIENTE:
            
            return {
                ...state,
                pacientes: action.payload
            }

        case PACIENTE_ACTUAL:    
            return {
                ...state,
                pacienteseleccionado: action.payload
            }    

        case EDITAR_PACIENTE:
            return {
                ...state,
                pacientes: state.pacientes.filter(paciente => paciente._id === action.payload._id)
            }  
        
        case PACIENTE_NULL:
            return{
                ...state,
                pacienteseleccionado: action.payload
            }

        case ELIMINAR_PACIENTE:
            return {
                ...state,
                pacientes: state.pacientes.filter(paciente => paciente._id !== action.payload)
            }
        default:
            return state;
    }
}