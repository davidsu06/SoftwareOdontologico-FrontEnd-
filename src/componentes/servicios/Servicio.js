import React, { useContext } from 'react'
import servicioState from '../../context/servicios/serviciosContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Servicio = ({servicio,usuario}) => {
    const {eliminarServicio, ServicioActual} = useContext(servicioState);

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
                eliminarServicio(id);  
            }
          })  
    }

    // Seleccionar el paciente actual
    const SeleccionarServicio = servicio => {
        ServicioActual(servicio); 
    }

    return (
        <tr>
            
            <td>{servicio.nombre_servicio}</td>
            <td>{new Intl.NumberFormat("de-DE").format(servicio.precioTotal)}</td>
            <td>{servicio.cantidadCitas}</td>
               
            {usuario
                ?(
                    <>
                        {usuario.cargo !== 'Administrador'
                            ? null
                            :(
                                <td className="text-center">
                                    <Tooltip placement="top" overlay="Editar Servicio" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                        <Link to={'/editar-servicio'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarServicio(servicio)}></Link>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay="Eliminar Servicio" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                        <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(servicio._id)}></i>
                                    </Tooltip>   
                                </td>
                            )
                        }
                    </> 
                )

                : null
            }           
        </tr>
    )
}

export default Servicio
