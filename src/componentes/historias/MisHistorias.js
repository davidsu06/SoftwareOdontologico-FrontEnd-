import React, { useContext, useEffect } from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import Historia from './Historia';
import img1 from '../../media/Logo.png';

const ListadoHistorias = () => {

    const {historias, listarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);
    let historiasPaciente;
    
    useEffect(() => {
        listarHistoria();
        // eslint-disable-next-line
    }, [])

    if(usuario){
        historiasPaciente = historias.filter(historia => historia.pacienteId === usuario.documento);
    }
    else{
        historiasPaciente = [];
    }
    
    return ( 
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    {usuario
                        ?
                        (
                            <div className="row">
                                <div className="col">
                                    <p> <b>Nombre:</b> {usuario.nombre} {usuario.apellido}</p>
                                    <p> <b>Documento:</b> {usuario.documento}</p>
                                    <p> <b>Teléfono:</b> {usuario.telefono}</p>
                                    <p> <b>Dirección:</b> {usuario.direccion}</p>
                                    
                                </div>

                                <div className="col">
                                    <img src={img1} className="w-25 mt-3" alt="Logo" style={{float:'right'}} /> 
                                </div>  
                            </div>

                            
                        )

                        :null
                    }
                </div>
                
                <div className="card-body">
                    {historiasPaciente.length === 0
                        ? (<h3 className="text-center">No tienes Historias clínicas disponibles</h3>) 

                        : (
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        <th scope="col">Documento Médico</th>
                                        <th scope="col">Descripción</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    {
                                        historiasPaciente.map(historia => (
                                            <Historia
                                                key={historia._id}
                                                historia={historia}
                                                usuario={usuario}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        )   
                    }

                </div>

                <div className="card-footer text-center">
                    <h5 className=""><b>Historia Clínica</b></h5>
                </div>

            </div>
        </div>
     );
}
 
export default ListadoHistorias;