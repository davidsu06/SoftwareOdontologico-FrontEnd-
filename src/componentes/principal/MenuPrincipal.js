import React, { useState, Fragment } from 'react';
import HeaderPrincipal from './HeaderPrincipal';
import ListadoNoticias from './ListadoNoticias';
import QuienesSomos from './QuienesSomos';
import Servicios from './Servicios';
import Contactenos from './Contactenos';

const MenuPrincipal = () => {

    //Creación State para Navegación
    const [navegacion, actualizarNavegacion] = useState('noticias');

    return ( 

    <Fragment>
        <HeaderPrincipal 
            actualizarNavegacion={actualizarNavegacion}
        />

        {navegacion === 'noticias' 
            ? <ListadoNoticias />

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