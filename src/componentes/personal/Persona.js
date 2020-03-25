import React, { useContext } from 'react';
import personaContext from '../../context/personal/personaContext';


const Persona = ({persona}) => {

    const personalContext = useContext(personaContext);
    const { eliminarPersona} = personalContext;

    // Funcion se ejecuta cuando el usuario seleecciona el btn de elimnar persona
    const onClickEliminar = id => {
        eliminarPersona(id);
        
    }

    return ( 
        <li className="list sombra">
            <p>{persona.nombre} </p>
            <div className="acciones">
                <button type="button" 
                    className="btn btn-info"
                    
                >Editar</button>
                <button type="button" 
                    className="btn btn-info"
                    onClick={() => onClickEliminar(persona.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Persona;