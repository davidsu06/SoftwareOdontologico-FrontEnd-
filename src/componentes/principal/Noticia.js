import React from 'react';

const Noticia = ({noticia}) => {
    return ( 
        <div className="card col-md-3" style={{margin:'50px'}}>
            <img src={noticia.urlToImage} className="card-img-top w-25" alt={noticia.title}  />
            <div className="card-body">
                <h5 className="card-title"> {noticia.title} </h5>
                <p className="card-text"> {noticia.description} </p>
                <a href={noticia.url} className="btn btn-primary">Ver Noticia</a>
            </div>
        </div>
    );
}
 
export default Noticia;