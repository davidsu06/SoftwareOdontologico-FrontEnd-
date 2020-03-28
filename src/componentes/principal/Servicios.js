import React, { Fragment } from 'react';
import Styled from '@emotion/styled';
import im1 from '../../media/imagenes servicios/Implante dental.png';
import im2 from '../../media/imagenes servicios/Ortodoncia.jpg';
import im3 from '../../media/imagenes servicios/sonrisa.jpg';
import im4 from '../../media/imagenes servicios/blanqueamiento dental.jpg';
import im5 from '../../media/imagenes servicios/endodoncia.jpg';
import im6 from '../../media/imagenes servicios/implanto-soportados.jpg';
import im7 from '../../media/imagenes servicios/protesis dentales.jpg';
import im8 from '../../media/imagenes servicios/coronas.jpg';
import im9 from '../../media/imagenes servicios/Limpieza.png';

const TarjetaServ = Styled.div `
    margin: 2cm;
    max-width: 12cm;
    max-height: 6cm;
`;

const Servicios = () => {

    const servicios = [
        {id:1, nombre:'Implantes Dentales', descripcion:'', imagen:im1},
        {id:2, nombre:'Ortodoncia Especializada', descripcion:'', imagen:im2},
        {id:3, nombre:'Diseño Sonrisa', descripcion:'', imagen:im3},
        {id:4, nombre:'Blanqueamiento Dental', descripcion:'', imagen:im4},
        {id:5, nombre:'Endodoncia', descripcion:'', imagen:im5},
        {id:6, nombre:'Protesis Implanto-Soportadas', descripcion:'', imagen:im6},
        {id:7, nombre:'Protesis Dentales', descripcion:'', imagen:im7},
        {id:8, nombre:'Coronas Dentales', descripcion:'', imagen:im8},
        {id:9, nombre:'Limpieza Estandar', descripcion:'', imagen:im9}
    ];

    return ( 
        <Fragment>
            <h1 className="titulos_principal">Nuestros Servicios</h1>

            <div className="row">
                {servicios.map(servicio => (
                    <TarjetaServ className="card bg-dark text-white" key={servicio.id}>
                        <img src={servicio.imagen} className="card-img" alt="Tarjeta" style={{maxHeight: '6cm'}}/>
                        <div className="card-img-overlay">
                            <h5 className="card-title" style={{color:'black'}} >{servicio.nombre}</h5>
                            <p className="card-text">{servicio.descripcion}</p>
                        </div>
                    </TarjetaServ>
                ))}
                
            </div>
            
            
        </Fragment>
     );
}
 
export default Servicios;
