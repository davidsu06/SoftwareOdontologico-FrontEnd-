import React, {useContext} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';

const Historia = ({historia, usuario}) => {

    const { HistoriaActual } = useContext(historiaContext);
    const {CitaNull} = useContext(citaContext);

    const { fecha, hora, pacienteId, personalId, descripcion } = historia;
    const newfecha = fecha.substr(0,10)

    let cargo;

    const SeleccionarHistoria = historia => {   
        HistoriaActual(historia);
        CitaNull();
    }

    if(usuario){
        if(usuario.cargo){
            cargo = usuario.cargo;
        }
    }
    
    return ( 
        <>
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                <td>{descripcion}</td>
                <td>{pacienteId}</td>

                {cargo === 'Paciente'

                    ?
                    (
                        <td>{personalId}</td>
                    )   
                    
                    : 
                    (
                        <td className="text-center">
                                <div className="mr-3">
                                    <Link to={'/editar-hist-clinica'} 
                                        type="button" className="fas fa-pencil-alt text-decoration-none text-dark" 
                                        onClick={() => SeleccionarHistoria(historia)}
                                    ></Link> 
                                </div>   
                        </td>
                        )
                }


                

            </tr>

        </>
     );
}
 
export default Historia