import React, { useContext, useEffect } from 'react';
import Persona from './Persona';
import personaContext from '../../context/personal/personaContext';

const ListadoPersona = () => {

    // Funcion para listar personas

    const personalContext = useContext(personaContext);
    const {listarPersonal, personal} = personalContext;

    useEffect(() => {
         listarPersonal();   
        // eslint-disable-next-line
    }, []);

    return ( 
        <> 
            <div className="col-md-11 col-sm-3">
                {personal.length === 0
                    ? 
                    (<h3 className="text-center">No hay Personal</h3>) 

                    : 
                    (
                    <div className="container d-flex justify-content-between">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Documento</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Fecha Nac</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    personal.map(persona => (
                                        <tr>
                                            <Persona
                                                key={persona._id}
                                                persona={persona}
                                            />
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> 
                    )
                }                                         
            </div>
        </>
     );
}
 
export default ListadoPersona;

