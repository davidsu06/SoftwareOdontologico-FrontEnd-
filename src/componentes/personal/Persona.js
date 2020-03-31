import React, { useContext } from 'react';
import personaContext from '../../context/personal/personaContext';
import { Link } from 'react-router-dom';


const Persona = ({persona}) => {

    const personalContext = useContext(personaContext);
    const { eliminarPersona, PersonalActual} = personalContext;

    // Funcion se ejecuta cuando el usuario seleecciona el btn de elimnar persona
    const onClickEliminar = id => {
        eliminarPersona(id);
        
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