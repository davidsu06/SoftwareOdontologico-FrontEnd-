import React, { useContext, useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import FormularioAsignarCita from '../citas/FormularioAsignarCita';
import AuthContext from '../../context/autenticacion/authContext';

const AsignarCitas = (props) => {
  const [ redirect, actualizarRedirect ] = useState(false)


  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {

    if(redirect) props.history.push('/consultar-citas')  
    // eslint-disable-next-line
  }, [redirect])

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, [])

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
    <Layout title='Asignar Cita'>
      <FormularioAsignarCita redireccion={ actualizarRedirect }/>
    </Layout>
  );
}
 
export default AsignarCitas;