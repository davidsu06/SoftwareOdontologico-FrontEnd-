import {
    CREAR_CITA,
    CITA_ACTUAL,
    LISTAR_CITA,
    ELIMINAR_CITA,
    EDITAR_CITA,
    CITA_NULL,
    FILTRAR_CITAS,
    CITAS_PACIENTE_CALENDARIO,
    ASIGNAR_CITA,
    CITA_ASIGNADA,
    CITAS_PACIENTE,
    CITA_EXISTENTE,
    SOLICITAR_CITA
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
                searching: false,
                citas: action.payload,
                citasPaciente:  state.citas.filter( cita => cita.estado === 'Sin asignar')
            }

        case CITA_EXISTENTE:
            return{
                ...state,
                citaexistente: action.payload
            }

        case FILTRAR_CITAS:
            return{
                ...state,
                searching : true,
                citasfiltradas: state.citas.filter( cita => cita.fecha.substr(0,10) === action.payload)
            }
            
        case CITAS_PACIENTE_CALENDARIO:
            return{
                ...state,
                searching : true,
                citasfiltradasPaciente: state.citasPaciente.filter( cita => cita.fecha.substr(0,10) === action.payload)
            }    

        case EDITAR_CITA:
            return{
                ...state,
                citas: state.citas.filter( cita => cita._id === action.payload._id )
            }

        case SOLICITAR_CITA:
            return{
                ...state,
                citas: state.citas.map( cita => cita._id === action.payload._id ?action.payload :cita)
            }

        case ELIMINAR_CITA:
            return{
                ...state,
                citas: state.citas.filter( cita => cita._id !== action.payload )
            }

        case CITA_NULL:
            return{
                ...state,
                citaseleccionada: action.payload
            }

        case ASIGNAR_CITA:
            return{
                ...state,
                citas: state.citas.filter( cita => cita._id === action.payload._id )
            } 

        case CITA_ASIGNADA:
            return{
                ...state,
                citasignada: action.payload
            }

        case CITAS_PACIENTE:
            return{
                ...state,
                citasfiltradas: state.citas.filter( cita => cita.pacienteId === action.payload)
            }

        default:
            return state;

    }
}