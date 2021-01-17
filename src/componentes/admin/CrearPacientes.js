import React ,{ useContext, useEffect }from 'react';
import Layout from '../layout/Layout';
import FormularioCrearPaciente from '../pacientes/FormularioCrearPaciente';
import pacienteContext from '../../context/pacientes/pacienteContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearPacientes = (props) => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])

  const pacientesContext = useContext(pacienteContext);
  const { pacienteseleccionado } = pacientesContext;
  let tituloHead;

  if(pacienteseleccionado !== null){
      tituloHead = "Editar Paciente";
  }else{
      tituloHead = "Crear Paciente";
  }

  // Protecting component
  const styleNotAuth = {
    display: 'flex',
    padding: '1rem 0rem 2rem 1rem',
    justifyContent: 'center'
  }

  if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');
      if (!item) {
          return <h3 style={styleNotAuth}>No autorizado</h3>
      }
  }

  return (  
    <Layout title={tituloHead}>
      <FormularioCrearPaciente props={props} />
    </Layout>
  );
}
 
export default CrearPacientes;