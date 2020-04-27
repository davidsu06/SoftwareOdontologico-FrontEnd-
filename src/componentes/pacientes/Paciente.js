import React, { useContext } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Paciente = ({paciente}) => {

    const pacientesContext = useContext(pacienteContext);
    const { eliminarPaciente, PacienteActual} = pacientesContext;

    // Funcion se ejecuta cuando el usuario selecciona el btn de elimnar paciente
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
                eliminarPaciente(id);
            }
          })
        
        
    }

    // Seleccionar el paciente actual
    const SeleccionarPaciente = paciente => {
        PacienteActual(paciente);
        
    }

    const newfecha = paciente.fnacimiento.substr(0,10)

    return ( 
        <>
            <td>{paciente.documento}</td>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellido}</td>
            <td>{newfecha}</td>
            <td>{paciente.direccion}</td>
            <td>{paciente.telefono}</td>
            <td className="text-center">            
                <Link to={'/editar-pacientes'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarPaciente(paciente)}></Link>
                <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(paciente._id)}></i>  
            </td>  
        </>
     );
}
 
export default Paciente;