import React from 'react';
import Servicio from './Servicio';

import im1 from '../../../media/imagenes servicios/Implante dental.png';
import im2 from '../../../media/imagenes servicios/Ortodoncia.jpg';
import im3 from '../../../media/imagenes servicios/sonrisa.jpg';
import im4 from '../../../media/imagenes servicios/blanqueamiento dental.jpg';
import im5 from '../../../media/imagenes servicios/endodoncia.jpg';
import im6 from '../../../media/imagenes servicios/implanto-soportados.jpg';
import im7 from '../../../media/imagenes servicios/protesis dentales.jpg';
import im8 from '../../../media/imagenes servicios/coronas.jpg';
import im9 from '../../../media/imagenes servicios/Limpieza.png';
import im10 from '../../../media/imagenes servicios/extraccion-dental.jpg';

const Servicios = () => {

    const servicios = [
        {id:1, nombre:'Implantes Dentales', img:im1},
        {id:2, nombre:'Ortodoncia Especializada', img:im2},
        {id:3, nombre:'Diseño Sonrisa', img:im3},
        {id:4, nombre:'Blanqueamiento Dental', img:im4},
        {id:5, nombre:'Endodoncia', img:im5},
        {id:6, nombre:'Prótesis Implanto-Soportadas', img:im6},
        {id:7, nombre:'Prótesis Dentales', img:im7},
        {id:8, nombre:'Coronas Dentales', img:im8},
        {id:9, nombre:'Limpieza Estándar', img:im9},
        {id:10, nombre:'Extracción Dental', img:im10}
    ];

    return ( 
        <>
            <h1 className="titulos_principal">Nuestros Servicios</h1>
            <div className="container">
                <div className="row">
                        {servicios.map(servicio => (
                            <Servicio 
                                key={servicio.id}
                                servicio={servicio}
                            />
                        ))}    
                </div>
            </div>
        </>
     );
}
 
export default Servicios;
