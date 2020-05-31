import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import im1 from '../../media/imagenes inicio/odontologia1.jpg';
import im2 from '../../media/imagenes inicio/odontologia2.jpg';
import im3 from '../../media/imagenes inicio/odontologia3.jpg';
import icono1 from '../../media/imagenes inicio/dental.png';
import icono2 from '../../media/imagenes inicio/calendario.png';
import icono3 from '../../media/imagenes inicio/pregunta.png';
import im4 from '../../media/imagenes inicio/odontologia4.jpg';
import Styled from '@emotion/styled';

const Inicio = ({actualizarNavegacion}) => {

    const TarjetaInicio = Styled.div`
        background-color: #196B81;
        border-radius: 10px;
        margin: 2cm;
    `;

    const EtiquetaDiseño = Styled.div`
        background-color: #28a745;
        border-radius: 10px;
        margin-left: 2cm;
        margin-right: 2cm;
    `;

    const BotonTarjeta = Styled.button`
        text-align: center;
        font-style: normal;
        width: 95%;
    `;

    return ( 
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={im1} className="d-block w-100" alt="Odontologia 1" style={{maxHeight:'550px'}} />
                    </div>
                    <div className="carousel-item">
                        <img src={im2} className="d-block w-100" alt="Odontologia 2" style={{maxHeight:'550px'}} />
                    </div>
                    <div className="carousel-item">
                        <img src={im3} className="d-block w-100" alt="Odontologia 3" style={{maxHeight:'550px'}} />
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>


            <TarjetaInicio className="p-3 mb-2 text-white card-group">
                <div className="card" style={{backgroundColor:'#196B81'}} >
                    <img src={icono1} className="card-img-top w-25" alt="Icono 1" style={{marginLeft:'35%'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{marginLeft:'40%'}}>Servicios</h5>
                        <p className="card-text" style={{textAlign:'center'}}>¡Ven y mira los tratamientos que tenemos para ti!</p>
                        <BotonTarjeta onClick={()=>actualizarNavegacion('servicios')} className="btn btn-success" >Ver Servicios</BotonTarjeta>
                    </div>
                </div>
                    
                <div className="card" style={{backgroundColor:'#196B81'}}>
                    <img src={icono2} className="card-img-top w-25" alt="Icono 2" style={{marginLeft:'35%'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{marginLeft:'42%'}}>Citas</h5>
                        <p className="card-text" style={{textAlign:'center'}}>Si estás registrado en nuestra plataforma, ¡Que esperas para pedir tu cita!</p>
                        <Link to={'/iniciar-sesion'} className="btn btn-success" style={{width:'95%'}}>Pedir Cita</Link>  
                    </div>
                </div>

                <div className="card" style={{backgroundColor:'#196B81'}}>
                    <img src={icono3} className="card-img-top w-25" alt="Icono 3" style={{marginLeft:'35%'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{marginLeft:'38%'}}>Salud Bucal</h5>
                        <p className="card-text" style={{textAlign:'center'}}>Mira terminologías y consejos básicos para que tu boca siempre sonria</p>
                        <BotonTarjeta onClick={()=>actualizarNavegacion('salud')} className="btn btn-success">Ver Básicos</BotonTarjeta>
                    </div>
                </div>
            </TarjetaInicio>

            <EtiquetaDiseño className="navbar">
                <div className="text-white ml-auto">
                    <h5 >"La odontología es una profesión que descubre sonrisas"</h5>
                </div>
            </EtiquetaDiseño>

            <div className="text-white" style={{marginTop:'2cm'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6 p-3 mb-2" style={{backgroundColor:'#196B81'}} >
                        <h2 style={{marginTop:'15%'}} ><b>¡Ven a Nuestro Centro Odontológico!</b></h2><br/>
                        <h5>
                            Animate a que tu sonrisa sea cada día más brillante, ven a nuestro centro odontológico en donde encontrarás tratamientos
                            especializados en salud oral enfocados en el diseño de Sonrisa, Ortodoncias e Implantología.
                            Además contamos con varios profesionales especializados los cuales siempre buscan estar a la altura de tu necesidad. De igual manera
                            Contamos con moderna tecnología y productos cuidadosamente seleccionados, que logren siempre garantizar una experiencia única y 
                            relajante a nuestros pacientes.<br/><br/>

                            <b>Te esperamos.</b>
                        </h5>
                    </div>
                    <div className="col-md-5 p-3 mb-2 bg-success">
                        <img src={im4} className="w-100" alt="Odontologia 4" />
                    </div>
                </div>
            </div>

        </Fragment>
        
     );
}
 
export default Inicio;