import React, { useContext } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './pdf';
import facturaState from '../../context/facturas/facturasContext';
import servicioState from '../../context/servicios/serviciosContext';
import pacienteState from '../../context/pacientes/pacienteContext';
import authState from '../../context/autenticacion/authContext';

const FacturaPDF = () => {
    
    const {facturaseleccionada} = useContext(facturaState);
    const {servicios} = useContext(servicioState);
    const {pacientes} = useContext(pacienteState);
    const{usuario} = useContext(authState);
    let pacienteActual;
    let servicioActual;

    if(pacientes && servicios && usuario){
        pacienteActual = pacientes.filter(paciente => paciente.documento === facturaseleccionada.documento_paciente);
        servicioActual = servicios.filter(servicio => servicio._id === facturaseleccionada.tratamiento);
    }

    else{
        pacienteActual = null;
        servicioActual = null;
    }

    return (
        <>
            {facturaseleccionada           
                ?
                    (
                        <div className="abs_center">
                            <PDFViewer className="w-50 alturapdf">
                                <MyDocument 
                                    facturas={facturaseleccionada}
                                    pacienteActual={pacienteActual}
                                    servicioActual={servicioActual}
                                    usuario={usuario}
                                 />
                            </PDFViewer>
                        </div>    
                    )

                :null
            }
            
        </>
    );
}
 
export default FacturaPDF;