import { 
    CREAR_FACTURA,
    LISTAR_FACTURA,
    CAMBIAR_ESTADO_FACTURA,
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

        case LISTAR_FACTURA:
            return {
                ...state,
                facturas: action.payload
            }

        case CAMBIAR_ESTADO_FACTURA:
            return{
                ...state,
                facturas: state.facturas.map( factura => factura._id === action.payload._id ?action.payload :factura)
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