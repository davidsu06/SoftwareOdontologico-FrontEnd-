import React, { useState, useEffect } from 'react';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const key = 'ce2e173795f641ef89021a8e418b4dfb';
                const url = `https://newsapi.org/v2/top-headlines?country=co&category=health&apiKey=${key}`;

                const result = await fetch( url, { credentials: 'omit' } );
                const response = await result.json();

                guardarNoticias(response.articles);
                
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