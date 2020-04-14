import React, { useContext } from 'react';
import personaContext from '../../context/personal/personaContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Persona = ({persona}) => {

    const personalContext = useContext(personaContext);
    const { eliminarPersona, PersonalActual} = personalContext;

    // Funcion se ejecuta cuando el usuario seleecciona el btn de elimnar persona
    const onClickEliminar = id => {
        
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.value) {
                eliminarPersona(id);
              
            }
          })
        
    }

    // Seleccionar la persona actual
    const SeleccionarPersona = persona => {
        PersonalActual(persona);    
    }

    return ( 
        <li className="list sombra">
            <p>{persona.nombre} </p>
            <div className="acciones">
                <Link to={'/editar-personal'} type="button" 
                    className="btn btn-info"
                    onClick={() => SeleccionarPersona(persona)}
                >Editar</Link>
                <button type="button" 
                    className="btn btn-info"
                    onClick={() => onClickEliminar(persona._id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Persona;