import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const key = 'a0e550edb1d2477d86e8eca544aa46d2';
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
            const respuesta = await axios.get(url);

            guardarNoticias(respuesta.data.articles);
        }

        consultarAPI();
    }, [])

    return ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}
 
export default ListadoNoticias;