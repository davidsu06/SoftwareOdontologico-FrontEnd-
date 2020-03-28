import React, { useContext } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';


const Paciente = ({paciente}) => {

    const pacientesContext = useContext(pacienteContext);
    const { eliminarPaciente} = pacientesContext;

    // Funcion se ejecuta cuando el usuario selecciona el btn de elimnar paciente
<<<<<<< HEAD
    const onClickEliminar = _id => {
        eliminarPaciente(_id);
        
=======
    const onClickEliminar = id => {
        eliminarPaciente(id);
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
        
    }

    return ( 
        <li className="list sombra">
            <p>{paciente.nombre} </p>
            <div className="acciones">
                <button type="button" 
                    className="btn btn-info"
                    
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