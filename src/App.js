import React, { Fragment } from 'react';
import ListadoPaciente from './componentes/pacientes/ListadoPaciente';
import ListadoPersona from './componentes/personal/ListadoPersona';
import PacienteState from './context/pacientes/pacienteState';
import PersonaState from './context/personal/personaState';

function App() {
  return(
    <Fragment>
      <PacienteState>  
        
        <h1>Odontología</h1>
        <ListadoPaciente/>
        
      </PacienteState>
      <PersonaState>
        <ListadoPersona/>
      </PersonaState>   
    </Fragment>
  );
}

export default App;
