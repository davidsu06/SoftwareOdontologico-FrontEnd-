import React,{ useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import ListadoFacturas from '../facturas/ListadoFacturas';
import AuthContext from '../../context/autenticacion/authContext';

const ConsultarFacturas = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

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
    <Layout title='Consultar Facturas'>
      <ListadoFacturas/>
    </Layout>
  );
}
 
export default ConsultarFacturas;