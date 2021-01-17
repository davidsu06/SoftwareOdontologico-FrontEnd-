import React, { useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import AuthContext from '../../context/autenticacion/authContext';

const InterfazAdmin = () => {
  const { usuarioAutenticado } = useContext(AuthContext);

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
    <Layout />  
  );
};
 
export default InterfazAdmin;