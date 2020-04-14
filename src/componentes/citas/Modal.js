import React from 'react';

const Modal = () => {

    return ( 
        <>
            <i type="button" className="fas fa-info-circle mx-2" data-toggle="modal" data-target="#detallescita"></i>

            <div className="modal fade" id="detallescita" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog" role="document">

                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detalles de la cita</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body text-left">
                                <p>Paciente: </p>
                                <p>Documento: </p>
                                <p>Motivo de la cita: </p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>

                        </div>

                    </div>

            </div>
        </>
     );
}
 
export default Modal;