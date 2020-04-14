import React, { useReducer } from 'react';
import facturasContext from './facturasContext';
import facturasReducer from './facturasReducer';
import clienteAxios from '../../config/axios';

import { 
    CREAR_FACTURA,
    LISTAR_FACTURA,
 } from '../../types';
 
const FacturasState = props => {
    
    const initialState = {
        facturas: [],
        facturaseleccionado: null
    }

    const [state, dispatch] = useReducer(facturasReducer, initialState);

    // Funciones

    const agregarFacturas = async facturas => {
        // console.log(paciente);
        try {
            console.log(facturas);
            const resultado = await clienteAxios.post('/api/facturas', facturas);
            console.log(facturas);
            dispatch({
                type: CREAR_FACTURA,    
                payload: resultado.data
                
            })
        } catch (error) {
            console.log(error);                
        }
    }


    const listarFacturas = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/facturas');
            dispatch({
                type: LISTAR_FACTURA,     
                payload: resultado.data.facturas
            })
        } catch (error) {
            console.log(error);                
        }
    }
    

    return (
        <facturasContext.Provider
            value={{
                facturas: state.facturas,
                facturaselecionado: state.facturaseleccionado,
                agregarFacturas,
                listarFacturas,
            }}
        >
            {props.children}
        </facturasContext.Provider>
    )
}
 
export default FacturasState;