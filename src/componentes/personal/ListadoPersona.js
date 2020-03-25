import React, { Fragment, useContext, useEffect } from 'react';
import Persona from './Persona';
import personaContext from '../../context/personal/personaContext';

const ListadoPersona = () => {

    

    // Funcion para listar personas

    const personalContext = useContext(personaContext);
    const {listarPersonal, personal} = personalContext;

    useEffect(() => {
         listarPersonal();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <Fragment>
            <h1> Desde ListadoPersona </h1>
            <button type="button" 
                className="btn btn-info"
                onClick = { () => listarPersonal()}
            >Listar</button>
            
            <div className="d-flex p-2">
            
            <ul className="listado-list">
                {personal.length === 0
                ? (<li className="list"><p>No hay personal</p></li>)
                : personal.map(persona => (
                    <Persona
                    key={persona.id}
                        persona={persona}
                    />
                ))
            }
            </ul>
            </div>
        </Fragment>
     );
}
 
export default ListadoPersona;