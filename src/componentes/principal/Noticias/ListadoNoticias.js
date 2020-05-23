import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const key = 'ce2e173795f641ef89021a8e418b4dfb';
                const url = `https://newsapi.org/v2/top-headlines?country=co&category=health&apiKey=${key}`;

                const respuesta = await axios.get(url);
                guardarNoticias(respuesta.data.articles);
                
            } catch (error) {
                console.log(error)
            }
        }

        consultarAPI();
    }, [])

    return ( 

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
      
     );
}
 
export default ListadoNoticias;