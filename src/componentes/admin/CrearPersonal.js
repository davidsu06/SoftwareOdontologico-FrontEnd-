import React,{ useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import FormularioCrearPersonal from '../personal/FormularioCrearPersonal';
import personaContext from '../../context/personal/personaContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearPaciente = (props) => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])
  
  const personalContext = useContext(personaContext);
  const { personalseleccionado } = personalContext;
  let tituloHead;

  if(personalseleccionado != null){
      tituloHead = "Editar Personal";
  }else{
      tituloHead = "Crear Personal";
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
      <FormularioCrearPersonal props={props} />
    </Layout>
  );
}
 
export default CrearPaciente;