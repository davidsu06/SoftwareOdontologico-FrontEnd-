import { 
    CREAR_FACTURA,
    LISTAR_FACTURA
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
        default:
            return state;
    }
}