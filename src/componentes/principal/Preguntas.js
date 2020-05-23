import React from 'react';

const Preguntas = () => {
    return ( 
        <>
            <h1 className="titulos_principal">Preguntas Frecuentes</h1>

            

            <div className="container" >
                <div class="accordion" id="accordionExample">
                    <h3 className="h3 mt-5"><b>Servicios</b></h3>
                    <div class="card">
                        <div className="card-header" id="headingOne" style={{backgroundColor:'#196B81'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    ¿Con cuántos servicios cuenta la Odontología?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                La odontología cuenta con 9 servicios, los cuales son: Implantes Dentales, Ortodoncia Especializada,
                                Diseño de Sonrisa, Blanqueamiento Dental, Endodoncia, Protesis Implanto-Soportadas, Protesis Dentales,
                                Coronas Dentales y limpieza Estándar.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo" style={{backgroundColor:'rgb(177,177,177,1)'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cuánto tiempo dura un tratamiento?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                La duración varía deacuerdo al tratamiento, lo común es que un tratamiento dure entre 1 a 2 años.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingThree" style={{backgroundColor:'#28a745'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Se pueden generar sobrecostos durante un tratamiento?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Los sobrecostos se pueden generar <b>Si el paciente no cumple con los cuidados básicos recomendados</b> por
                                el odontologo especializado encargado.
                            </div>
                        </div>
                    </div>

                    <h3 className="h3 mt-5"><b>Citas</b></h3>
                    <div className="card">
                        <div className="card-header" id="headingFour" style={{backgroundColor:'#196B81'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    ¿Cómo puedo pedir una cita?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div className="card-body">
                                Puedes pedir una cita de 2 formas:<br/>
                                <b>1.</b>LLendo a nuestro centro odontológico y hablar con nuestro personal encargado.<br/>
                                <b>2.</b>Desde nuestra página web iniciando sesión en la plataforma.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingFive" style={{backgroundColor:'rgb(177,177,177,1)'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    ¿Puedo cancelar alguna cita?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div className="card-body">
                                Claro que puedes cancelar tus citas, dichas citas las puedes cancelar asistiendo al centro odontológico o desde nuestra página web
                                iniciando sesión en la plataforma.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingSix" style={{backgroundColor:'#28a745'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    ¿Cuánto cuesta una cita y cuáles son los medios para pagar dicha cita?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div className="card-body">
                                El precio de las citas varía dependiendo del tratamiento elegido por el paciente.<br/>
                                Puedes pagar en efectivo o con tu tarjeta Débito.
                            </div>
                        </div>
                    </div>

                    <h3 className="h3 mt-5"><b>Iniciar Sesión</b></h3>
                    <div className="card">
                        <div className="card-header" id="headingSeven" style={{backgroundColor:'#196B81'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    ¿Cómo puedo iniciar sesión en la plataforma?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                            <div className="card-body">
                                Desde nuestra página web en la esquina superior derecha puedes encontrar el botón para iniciar sesión en nuestra
                                plataforma, además debes digitar tu usuario y contraseña que te fueron asignados en la primera cita de tu tratamiento.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingEight" style={{backgroundColor:'rgb(177,177,177,1)'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    ¿Es necesario iniciar sesión con mi usuario para pedir alguna cita?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                            <div className="card-body">
                                No es necesario, si quieres pedir alguna cita para un tratamiento determinado, acercate a nuestro centro odontológico.
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingNine" style={{backgroundColor:'#28a745'}}>
                            <h2 className="mb-0">
                                <button className="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    ¿Puedo realizar el pago de una factura a través de mi usuario al iniciar sesión?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                            <div className="card-body">
                                No, los pagos tienen que hacerse directamente en nuestro centro odontológico ya sea pagando en efectivo o pagando con tarjeta Débito.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Preguntas;