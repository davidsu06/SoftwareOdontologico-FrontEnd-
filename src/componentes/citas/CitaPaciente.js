import React, { useContext} from 'react';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Swal from 'sweetalert2';
import Tooltip from 'rc-tooltip';

const CitaPaciente = ({cita}) => {

    const authContext = useContext(AuthContext);
    const {  usuario } = authContext;

    const citasContext = useContext(citaContext);
    const { modificarCita, listarCitasPaciente } = citasContext;

    const { fecha, hora, tipo } = cita;
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
                    tipo: 'No Definida',
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
                <td>{tipo}</td>
                <td className="text-center">
                    <Tooltip placement="top" overlay="Cancelar Cita" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                        <i type="button" className="fas fa-ban font-weight-bold" style={{fontSize:'20px'}} onClick={ () => onClickCancelar(cita) }></i>
                    </Tooltip>                   
                </td>
            </tr>
        </>
     );
}
 
export default CitaPaciente;