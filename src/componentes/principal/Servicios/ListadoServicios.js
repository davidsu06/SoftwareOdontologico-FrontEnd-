import React, { useEffect, useContext } from 'react';
import Servicio from './Servicio';
import serviciosContext from '../../../context/servicios/serviciosContext'

const Servicios = () => {

    const {servicios, listarServicios} = useContext(serviciosContext)

    useEffect(() => {
        listarServicios();
         // eslint-disable-next-line
    }, [])

    return ( 
        <>
            <h1 className="titulos_principal">Nuestros Servicios</h1>
            <div className="container">
                <div className="row">
                        {servicios.map(servicio => (
                            <Servicio 
                                key={servicio._id}
                                servicio={servicio}
                            />
                        ))}    
                </div>
            </div>

        </>
     );
}
 
export default Servicios;
