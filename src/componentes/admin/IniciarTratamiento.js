import React,{ useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import FormularioTratamiento from '../tratamientos/formularioIniciarTratamiento';
import TratamientoContext from '../../context/tratamientos/tratamientoContext';
import AuthContext from '../../context/autenticacion/authContext';

const CrearFactura = (props) => {
  const { usuarioAutenticado } = useContext(AuthContext);

  const { tratamientoseleccionado } = useContext(TratamientoContext);
  let header;

  if (tratamientoseleccionado !== null) {
    header = "Editar Tratamiento"
  } else {
    header = "Iniciar Tratamiento"
  }

  
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
    <Layout title={header}>
      <FormularioTratamiento props={props} />
    </Layout>
  );
}
 
export default CrearFactura;