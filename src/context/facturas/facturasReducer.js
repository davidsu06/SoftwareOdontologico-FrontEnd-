import { 
    CREAR_FACTURA,
    LISTAR_FACTURA,
    LISTAR_PACIENTE,
    FACTURA_ACTUAL,
    FACTURA_NULL
 } from '../../types';


export default (state, action) => {
    switch(action.type) {

        case CREAR_FACTURA:
            
            return {
                ...state,
                facturas: [action.payload, ...state.facturas]
            }
        
        case LISTAR_PACIENTE:
            
        return {
            ...state,
            facturas: action.payload
        }

        case LISTAR_FACTURA:
            
            return {
                ...state,
                facturas: action.payload
            }

        case FACTURA_ACTUAL:
            return{
                ...state,
                facturaseleccionada: action.payload
            }

        case FACTURA_NULL:
        return{
            ...state,
            facturaseleccionada: action.payload
        }

        default:
            return state;
    }
}