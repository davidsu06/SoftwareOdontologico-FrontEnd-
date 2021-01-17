import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Swal from 'sweetalert2';
import Tooltip from 'rc-tooltip';

const Servicio = ({tratamiento}) => {
    const {eliminarTratamiento, tratamientoActual} = useContext(tratamientoContext);

    // Funcion se ejecuta cuando el usuario selecciona el btn de elimnar Servicio
    const onClickEliminar = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No se podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.value) {
                eliminarTratamiento(id);  
            }
          })  
    }

    // Seleccionar el paciente actual
    const SeleccionarTratamiento = tratamiento => {
        tratamientoActual(tratamiento); 
    }

    return (
        <tr>
            <td>{tratamiento.pacienteId}</td>
            <td>{tratamiento.pacienteNombre}</td>
            <td>{tratamiento.servicio}</td>
            <td>{tratamiento.citasVistas}</td>
            <td>{tratamiento.estado}</td>
            <td>{tratamiento.cuotas}</td>
            <td>{new Intl.NumberFormat("de-DE").format(tratamiento.saldoAbonado)}</td>
            <td className="text-center" style={{width:'75px'}}>
                {tratamiento.citasVistas === 0 && tratamiento.saldoAbonado === 0
                    && (
                        <Tooltip placement="top" overlay="Editar Tratamiento" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                            <Link to={'/editar-tratamiento'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarTratamiento(tratamiento)}></Link>
                        </Tooltip>
                    )
                
                }
                <Tooltip placement="top" overlay="Eliminar Tratamiento" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                    <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(tratamiento._id)}></i>  
                </Tooltip>
                
            </td>          
        </tr>
    )
}

export default Servicio
