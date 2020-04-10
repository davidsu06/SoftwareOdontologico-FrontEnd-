import React, { useReducer } from 'react';
import facturasContext from './facturasContext';
import facturasReducer from './facturasReducer';
import clienteAxios from '../../config/axios';

import { 
    CREAR_FACTURA,
    LISTAR_FACTURA
 } from '../../types';
 
const facturasState = props => {
    
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
             console.log(resultado);
            
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
/*
    const eliminarPaciente = async pacienteId => {
        console.log(pacienteId);
        try {
            await clienteAxios.delete(`/api/pacientes/${pacienteId}`);
            dispatch({
                type: ELIMINAR_PACIENTE,
                payload: pacienteId
            })
        }catch (error) {
            console.log(error);
            
        }
    }
*/

    return (
        <facturasContext.Provider
            value={{
                agregarFacturas,
                listarFacturas
            }}
        >
            {props.children}
        </facturasContext.Provider>
    )
}
 
export default facturasState;