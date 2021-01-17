import React, { useEffect, useContext } from 'react';
import Layout from '../layout/Layout';
import AuthContext from '../../context/autenticacion/authContext'
import FormularioCrearServicio from '../servicios/formularioCrearServicio';
import servicioState from '../../context/servicios/serviciosContext';

const CrearServicio = (props) => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    
    const { servicioseleccionado } = useContext(servicioState);
    let tituloHead;

    if(servicioseleccionado !== null){
        tituloHead = "Editar Servicio";
    }else{
        tituloHead = "Crear Servicio";
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
            <FormularioCrearServicio props={props} />
        </Layout>
    );
};
 
export default CrearServicio;