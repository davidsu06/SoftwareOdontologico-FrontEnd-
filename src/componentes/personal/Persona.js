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

    const newfecha = persona.fecha_nacimiento.substr(0,10)
    return ( 
        <tr>
            <td>{persona.documento}</td>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{newfecha}</td>
            <td>{persona.direccion}</td>
            <td>{persona.telefono}</td>
            <td className="text-center">            
                <Link to={'/editar-personal'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarPersona(persona)}></Link>
                <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(persona._id)}></i>  
            </td> 
        </tr>   
     );
      
}
 
export default Persona;