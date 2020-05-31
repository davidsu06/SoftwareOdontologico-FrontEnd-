import React from 'react';
import Styled from '@emotion/styled';

const Tarjeta = Styled.div `
    margin: 50px;
    max-width: 350px;
    max-height: 620px;
`;

const NotiWeb = Styled.a `
    text-align: center;
    font-style: normal;
    border-radius: 10px;
    width: 95%;
    font-size: 18px;
    background-color: #28a745;
    border: none;
`;

const Imagen = Styled.img `
    max-height: 270px;
`;

const Noticia = ({noticia}) => {
    return ( 
        <Tarjeta className="card">
            <div className="row no-gutters">
                <div>
                    <Imagen src={noticia.urlToImage} className="card-img " alt={noticia.title} />
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{noticia.title}</h5>
                    <p className="card-text" style={{maxHeight:'150px'}}>{noticia.description}</p>
                    <NotiWeb href={noticia.url} className="btn btn-primary mt-3">Ver Noticia</NotiWeb>
                </div>
            </div>    
        </Tarjeta>
    );
}
 
export default Noticia;