import React, { useContext } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';


const Paciente = ({paciente}) => {

    const pacientesContext = useContext(pacienteContext);
    const { eliminarPaciente, PacienteActual} = pacientesContext;

    // Funcion se ejecuta cuando el usuario selecciona el btn de elimnar paciente
    const onClickEliminar = id => {
        eliminarPaciente(id);
        
    }

    // Seleccionar el paciente actual
    const SeleccionarPaciente = paciente => {
        PacienteActual(paciente);
        
    }

    return ( 
        <li className="list sombra">
            <p>{paciente.nombre} </p>
            <div className="acciones">
                <button type="button" 
                    className="btn btn-info"
                    onClick={() => SeleccionarPaciente(paciente)}
                   
                >Editar</button>
                <button type="button" 
                    className="btn btn-info"
                    onClick={() => onClickEliminar(paciente._id)}
                    
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Paciente;