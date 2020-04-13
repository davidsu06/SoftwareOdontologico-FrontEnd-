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

    return ( 
        <li className="list sombra">
            <p>{paciente.nombre} </p>
            <div className="acciones">
                <Link to={'/editar-pacientes'} type="button" 
                    className="btn btn-info"
                    onClick={() => SeleccionarPaciente(paciente)}         
                >Editar</Link>
                <button type="button" 
                    className="btn btn-info"
                    onClick={() => onClickEliminar(paciente._id)}
                    
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Paciente;