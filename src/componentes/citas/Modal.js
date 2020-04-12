import React from 'react';

const Modal = () => {

    return ( 
        <>
            <i type="button" class="fas fa-info-circle mx-2" data-toggle="modal" data-target="#detallescita"></i>

            <div class="modal fade" id="detallescita" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog" role="document">

                        <div class="modal-content">

                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detalles de la cita</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body text-left">
                                <p>Paciente: </p>
                                <p>Documento: </p>
                                <p>Motivo de la cita: </p>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                            </div>

                        </div>

                    </div>

            </div>
        </>
     );
}
 
export default Modal;