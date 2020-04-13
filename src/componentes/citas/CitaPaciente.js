import React, { useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Swal from 'sweetalert2';

const CitaPaciente = ({cita}) => {

    const authContext = useContext(AuthContext);
    const {  usuario } = authContext;

    const citasContext = useContext(citaContext);
    const { modificarCita, listarCitasPaciente } = citasContext;

    const { fecha, hora } = cita;
    const newfecha = fecha.substr(0,10)

    const onClickCancelar = cita => {

        Swal.fire({
        title: '¿Estas seguro?',
        text: "No se podrá revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar cita!'
        }).then((result) => {
        if (result.value) {

            const cancelar = async () => {
                await modificarCita({
                    _id : cita._id,
                    estado: 'Sin asignar',
                    pacienteId: '0'
                })   
                await listarCitasPaciente(usuario.documento);
            }
            cancelar();
        }
        })

        
    }

    return ( 
        <>
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                <td className="text-center">
                    <a type="button" className="text-info" onClick={ () => onClickCancelar(cita) }>Cancelar cita</a>
                </td>
            </tr>
        </>
     );
}
 
export default CitaPaciente;