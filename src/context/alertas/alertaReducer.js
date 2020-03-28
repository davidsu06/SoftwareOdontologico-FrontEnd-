import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";


export default (state, action) =>{
    switch(action.type){
        default:
            case MOSTRAR_ALERTA:
                return{
                    alerta: action.payload
                }

            case OCULTAR_ALERTA:
                return{
                    alerta: null
                }
            return state;

    }
}