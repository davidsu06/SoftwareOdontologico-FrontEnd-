import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MenuPrincipal from './componentes/principal/MenuPrincipal'
import Login from './componentes/principal/Login'
import ConsultarPacientes from './componentes/admin/ConsultarPacientes';
import ConsultarPersonal from './componentes/admin/ConsultarPersonal';
import PacienteState from './context/pacientes/pacienteState';
import PersonaState from './context/personal/personaState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertaState'
import CrearPacientes from './componentes/admin/CrearPacientes';
import CrearPersonal from './componentes/admin/CrearPersonal';
import tokenAuth from './config/token';

//Revisar si se tiene un token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return(
    <PacienteState> 
      <PersonaState> 
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={MenuPrincipal}/>
                <Route exact path="/iniciar-sesion" component={Login}/>
                <Route exact path="/consultar-pacientes" component={ConsultarPacientes}/>
                <Route exact path="/consultar-personal" component={ConsultarPersonal}/>
                <Route exact path="/crear-pacientes" component={CrearPacientes}/>
                <Route exact path="/editar-pacientes" component={CrearPacientes}/>
                <Route exact path="/crear-personal" component={CrearPersonal}/>
                <Route exact path="/editar-personal" component={CrearPersonal}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </PersonaState>
    </PacienteState> 
  );
}

export default App;
