import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import tokenAuth from './config/token';

import MenuPrincipal from './componentes/principal/MenuPrincipal'
import Login from './componentes/principal/Login'
import ConsultarPacientes from './componentes/admin/ConsultarPacientes';
import ConsultarPersonal from './componentes/admin/ConsultarPersonal';
import ConsultarCitas from './componentes/admin/ConsultarCitas';
import CrearServicio from './componentes/admin/CrearServicio';
import AsignarCitas from './componentes/admin/AsignarCitas';
import MisCitas from './componentes/citas/MisCitas';
import PacienteState from './context/pacientes/pacienteState';
import PersonaState from './context/personal/personaState';
import FacturasState from './context/facturas/facturasState';
import ServiciosState from './context/servicios/serviciosState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertaState'
import CitaState from './context/citas/citaState';
import HistoriaState from './context/historia/historiaState';
import CrearPacientes from './componentes/admin/CrearPacientes';
import CrearPersonal from './componentes/admin/CrearPersonal';
import InterfazAdmin from './componentes/layout/InterfazAdmin';
import CrearCitas from './componentes/admin/CrearCitas';
import CrearFactura from './componentes/admin/CrearFactura';
import CrearHistoria from './componentes/admin/CrearHistoria';
import ConsultarHistorias from './componentes/admin/ConsultarHistorias';
import MiHistorial from './componentes/admin/MiHistorial';


//Revisar si se tiene un token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return(
    <AuthState>
      <CitaState>
        <PacienteState> 
          <PersonaState>
            <FacturasState>
              <AlertaState>
                <HistoriaState>
                  <ServiciosState>
                    <Router>
                      <Switch>
                        <Route exact path="/" component={MenuPrincipal}/>
                        <Route exact path="/iniciar-sesion" component={Login}/>
                        <Route exact path="/gestion-sistema" component={InterfazAdmin}/>
                        <Route exact path="/consultar-pacientes" component={ConsultarPacientes}/>
                        <Route exact path="/consultar-personal" component={ConsultarPersonal}/>
                        <Route exact path="/consultar-citas" component={ConsultarCitas}/>
                        <Route exact path="/crear-pacientes" component={CrearPacientes}/>
                        <Route exact path="/editar-pacientes" component={CrearPacientes}/>
                        <Route exact path="/crear-personal" component={CrearPersonal}/>
                        <Route exact path="/editar-personal" component={CrearPersonal}/>
                        <Route exact path="/crear-citas" component={CrearCitas}/>
                        <Route exact path="/editar-citas" component={CrearCitas}/>
                        <Route exact path="/asignar-citas" component={AsignarCitas}/>
                        <Route exact path="/crear-hist-clinica" component={CrearHistoria}/>
                        <Route exact path="/editar-hist-clinica" component={CrearHistoria}/>
                        <Route exact path="/consultar-hist-clinica" component={ConsultarHistorias}/>
                        <Route exact path="/mi-hist-clinica" component={MiHistorial}/>
                        <Route exact path="/crear-factura" component={CrearFactura}/>
                        <Route exact path="/crear-servicio" component={CrearServicio}/>
                      </Switch>
                    </Router>
                  </ServiciosState>
                </HistoriaState>
              </AlertaState>
            </FacturasState>
          </PersonaState>
        </PacienteState> 
      </CitaState>
    </AuthState>
  );
}

export default App;
