import React from 'react';
import PanelGestion from '../layout/PanelGestion';
import NavbarGestion from '../layout/NavbarGestion';
import PersonaState from '../../context/personal/personaState';

const ConsultarPersonal = () => {
    return ( 
        <>
            <PersonaState>
                <div className="d-flex flex-row">
                    <PanelGestion/>
                    <NavbarGestion titulo="Consultar Personal"/> 
                </div>
            </PersonaState>  
        </>

     );
}
 
export default ConsultarPersonal;