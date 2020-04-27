import React, { useContext } from 'react'
import servicioState from '../../context/servicios/serviciosContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Servicio = ({servicio,usuario}) => {
    const {eliminarServicio,ServicioActual} = useContext(servicioState);

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
            <td>{servicio._id}</td>
            <td>{servicio.nombre_servicio}</td>
            <td className="text-center">            
                <Link to={'/editar-servicio'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarServicio(servicio)}></Link>
                <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(servicio._id)}></i>  
            </td> 
        </tr>
    )
}

export default Servicio
