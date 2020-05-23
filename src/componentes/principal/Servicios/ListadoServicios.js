import React, { useEffect, useContext } from 'react';
import serviciosContext from '../../../context/servicios/serviciosContext';
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

const Servicios = () => {
    const {servicios, listarServicios} = useContext(serviciosContext);

    useEffect( () =>{
        listarServicios();
        // eslint-disable-next-line
    },[])

    const imagenes = [
        {id:1, nombre:'Implantes Dentales', img:im1},
        {id:2, nombre:'Ortodoncia Especializada', img:im2},
        {id:3, nombre:'Diseño Sonrisa', img:im3},
        {id:4, nombre:'Blanqueamiento Dental', img:im4},
        {id:5, nombre:'Endodoncia', img:im5},
        {id:6, nombre:'Prótesis Implanto-Soportadas', img:im6},
        {id:7, nombre:'Prótesis Dentales', img:im7},
        {id:8, nombre:'Coronas Dentales', img:im8},
        {id:9, nombre:'Limpieza Estándar', img:im9}
    ];

    return ( 
        <>
            <h1 className="titulos_principal">Nuestros Servicios</h1>
            <div className="container">
                <div className="row">
                        {servicios.map(servicio => (
                            <Servicio 
                                key={servicio._id}
                                servicio={servicio}
                                imagen= {imagenes.filter( imagen => imagen.nombre === servicio.nombre_servicio)[0]}
                            />
                        ))}    
                </div>
            </div>
        </>
     );
}
 
export default Servicios;
