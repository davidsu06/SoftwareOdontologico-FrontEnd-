import React, { useReducer } from 'react';
import facturasContext from './facturasContext';
import facturasReducer from './facturasReducer';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

import { 
    CREAR_FACTURA,
    LISTAR_FACTURA,
    LISTAR_SERVICIO
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
            Swal.fire(
                'Correcto',
                'La factura se agrego correctamente',
                'success'
            )
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
    const listarServicios = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/servicios');
            console.log(resultado);
            dispatch({
                type: LISTAR_SERVICIO,     
                payload: resultado.data.servicio
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
                listarServicios
            }}
        >
            {props.children}
        </facturasContext.Provider>
    )
}
 
export default FacturasState;