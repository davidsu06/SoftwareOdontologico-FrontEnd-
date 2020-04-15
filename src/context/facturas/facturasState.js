import React, { useReducer } from 'react';
import facturasContext from './facturasContext';
import facturasReducer from './facturasReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import { 
    CREAR_FACTURA,
    LISTAR_FACTURA,
    FACTURA_ACTUAL,
    FACTURA_NULL
 } from '../../types';
 
const FacturasState = props => {
    
    const initialState = {
        facturas: [],
        facturaseleccionada: null
    }

    const [state, dispatch] = useReducer(facturasReducer, initialState);

    // Funciones

    const agregarFacturas = async facturas => {
        // console.log(paciente);
        try {
            const resultado = await clienteAxios.post('/api/facturas', facturas);
            console.log(resultado);
            Swal.fire(
                'Correcto',
                'La factura se agrego correctamente',
                'success'
            )
            dispatch({
                type: CREAR_FACTURA,    
                payload: facturas
                
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

    const seleccionarFactura = factura =>{
        dispatch({
            type: FACTURA_ACTUAL,
            payload: factura
        })
    }

    const facturaNull = () =>{
        dispatch({
            type: FACTURA_NULL,
            payload: null
        })
    }
    

    return (
        <facturasContext.Provider
            value={{
                facturas: state.facturas,
                facturaseleccionada: state.facturaseleccionada,
                agregarFacturas,
                listarFacturas,
                seleccionarFactura,
                facturaNull
            }}
        >
            {props.children}
        </facturasContext.Provider>
    )
}
 
export default FacturasState;