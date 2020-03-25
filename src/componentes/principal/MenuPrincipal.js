import React, { useState, Fragment } from 'react';
import HeaderPrincipal from './HeaderPrincipal';
import Noticias from './Noticias';
import QuienesSomos from './QuienesSomos';
import Servicios from './Servicios';
import Contactenos from './Contactenos';

const MenuPrincipal = () => {

    //Creación State para Navegación
    const [navegacion, actualizarNavegacion] = useState('inicio');

    return ( 

    <Fragment>
        <HeaderPrincipal 
            actualizarNavegacion={actualizarNavegacion}
        />

        {navegacion === 'inicio' 
            ? <Noticias />

            :null
        }

        {navegacion === 'servicios' 
            ? <Servicios />

            :null
        }

        {navegacion === 'quienes' 
            ? <QuienesSomos />

            :null
        }

        {navegacion === 'contactenos' 
            ? <Contactenos />

            :null
        }
    </Fragment>
        
     );
}
 
export default MenuPrincipal;