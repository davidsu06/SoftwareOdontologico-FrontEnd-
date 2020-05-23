import React, {useContext} from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import historiaContext from '../../context/historia/historiaContext';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';

const Historia = ({historia, usuario}) => {

    const { HistoriaActual } = useContext(historiaContext);
    const {CitaNull} = useContext(citaContext);

    const { fecha, hora, pacienteId, personalId, descripcion, servicio } = historia;
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

                {cargo === 'Paciente'

                    ?
                    (
                        <>
                            <td>{personalId}</td>
                            <td>{descripcion}</td>
                            <td>{servicio}</td>
                        </>
                    )   
                    
                    : 
                    (
                        <>
                            <td>{descripcion}</td>
                            <td>{servicio}</td>
                            <td>{pacienteId}</td>
                            <td className="text-center" style={{width:'2cm'}}>
                                <Tooltip placement="top" overlay="Editar Historia" overlayClassName="font-weight-bold text-white">
                                    <Link to={'/editar-hist-clinica'} 
                                        type="button" className="fas fa-pencil-alt text-decoration-none text-dark" 
                                        onClick={() => SeleccionarHistoria(historia)}
                                    ></Link>
                                </Tooltip>
                            </td>
                        </>
                    )
                }

                
            </tr>

        </>
     );
}
 
export default Historia