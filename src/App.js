import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConsultarPacientes from './componentes/admin/ConsultarPacientes';
import ConsultarPersonal from './componentes/admin/ConsultarPersonal';
import PacienteState from './context/pacientes/pacienteState';

function App() {
  return(
    <PacienteState>  
        <Router>
          <Switch>
            <Route exact path="/consultar-pacientes" component={ConsultarPacientes}/>
            <Route exact path="/consultar-personal" component={ConsultarPersonal}/>
          </Switch>
        </Router>
      </PacienteState> 
  );
}

export default App;
