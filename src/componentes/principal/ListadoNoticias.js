import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const key = 'a0e550edb1d2477d86e8eca544aa46d2';
<<<<<<< HEAD
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
=======
            const url = `https://newsapi.org/v2/top-headlines?country=co&apiKey=${key}`;
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
            const respuesta = await axios.get(url);

            guardarNoticias(respuesta.data.articles);
        }

        consultarAPI();
    }, [])

    return ( 
<<<<<<< HEAD
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>

=======

        <>
            <h1 className="titulos_principal">Últimas Noticias sobre Salud</h1>
            <div className="row">
                {noticias.map(noticia => (
                    <Noticia 
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </div>
        </>
      
>>>>>>> e9b439c2f5cda534cdeaedd6fa4d7ceae0b27a33
     );
}
 
export default ListadoNoticias;