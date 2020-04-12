import React, { useContext, useEffect } from 'react';
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
        <> 
            <ul className="listado-list mt-3">
                {personal.length === 0
                ? (<li className="list"><p>No hay personal</p></li>)
                : personal.map(persona => (
                    <Persona
                        key={persona._id}
                        persona={persona}
                    />
                ))
            }
            </ul>
        </>
     );
}
 
export default ListadoPersona;