import React, { useState, Fragment } from 'react';
import HeaderPrincipal from './HeaderPrincipal';
import ListadoNoticias from './Noticias/ListadoNoticias';
import SaludDental from './SaludDental';
import Servicios from './Servicios/ListadoServicios';
import Preguntas from './Preguntas';
import Footer from './Footer';
import Inicio from './Inicio';

const MenuPrincipal = () => {

    //Creación State para Navegación
    const [navegacion, actualizarNavegacion] = useState('inicio');

    return ( 

    <Fragment>
        <HeaderPrincipal 
            actualizarNavegacion={actualizarNavegacion}
        />

        {navegacion === 'inicio' 
            ? <Inicio actualizarNavegacion={actualizarNavegacion}/>

            :null
        }

        {navegacion === 'noticias' 
            ? <ListadoNoticias />

            :null
        }

        {navegacion === 'servicios' 
            ? <Servicios />

            :null
        }

        {navegacion === 'salud' 
            ? <SaludDental />

            :null
        }

        {navegacion === 'preguntas' 
            ? <Preguntas />

            :null
        }

        <Footer />
    </Fragment>
        
     );
}
 
export default MenuPrincipal;