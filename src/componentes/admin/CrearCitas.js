import React, { useContext, useEffect } from 'react';
import Layout from '../layout/Layout';
import citaContext from '../../context/citas/citaContext';
import FormularioCrearCita from '../citas/FormularioCrearCita';
import AuthContext from '../../context/autenticacion/authContext';

const CrearCitas = () => {
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
    }, [])

    const citasContext = useContext(citaContext);
    const { citaseleccionada } = citasContext;
    let tituloHead;

    if (citaseleccionada != null) {
        tituloHead = 'Editar Cita'
    }else{
        tituloHead = 'Crear Cita'
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
            <FormularioCrearCita/>
        </Layout>
    );
}
 
export default CrearCitas;