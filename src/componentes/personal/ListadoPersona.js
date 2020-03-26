import React, { useContext, useEffect } from 'react';
import Persona from './Persona';
import personaContext from '../../context/personal/personaContext';
import PanelGestion from '../layout/PanelGestion';
import NavbarGestion from '../layout/NavbarGestion';

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
            <PanelGestion titulo="Consultar Personal"/>

            <div className="container-fluid">

                <div className="row">

                <NavbarGestion/>
                    <div className="col-9 mt-3">

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
                        
                    </div>

                </div>

            </div>
        </>
     );
}
 
export default ListadoPersona;