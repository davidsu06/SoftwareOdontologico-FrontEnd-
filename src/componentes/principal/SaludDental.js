import React from 'react';
import im1 from '../../media/imagenes inicio/dental1.jpg'
import im2 from '../../media/imagenes inicio/dental2.jpg'
import im3 from '../../media/imagenes inicio/dental3.jpg'
import Styled from '@emotion/styled';

const SaludDental = () => {

    const ImagenEsp = Styled.img`
        display: block;
        margin-left: auto;
        margin-right: auto;
    `;

    return ( 
        <>
            <h1 className="titulos_principal">Fundamentos de la Odontología</h1>

            <div className="row justify-content-center text-white" style={{marginTop:'1cm'}}>
                <div className="col-md-5 ">
                    <img src={im1} className="w-100" alt="Dental 1" />
                </div>
                <div className="col-md-6" style={{backgroundColor:'#196B81'}} >
                    <h2 className="h2"><b>¿ De que se ocupa la Odontología ?</b></h2><br/>
                    <h5>
                        La odontología es la rama de las ciencias de la salud que se encarga del estudio, diagnóstico, prevención y tratamiento de las enfermedades 
                        que afectan tanto al aparato estomatognático como a cualquier parte de la estructura mandibular (Dientes, encias, periodonto, articulación temporomandibular,
                        conjunto del sistema muscular y nervioso vocal).<br/><br/>

                        La odontología no se limita a intervenir en las enfermedades de los dientes, sino que también abarca todo lo que compone el aparato estomatognático,
                        compuesto por los dientes, la cavidad oral, los maxilares, los músculos, la piel, los vasos y los nervios de esa parte del cuerpo.
                    </h5>
                </div>
            </div>


            <div className="container bg-success text-white p-3 mb-2" style={{marginTop:'1cm'}} >
                <h2 className="h2" style={{textAlign:'center'}} ><b>Especialidades de la Odontología</b></h2><br/>
                <ImagenEsp src={im2} className="w-50" alt="Dental 2" /><br/>
                <h5>
                    Con el paso del tiempo, la Odontología a evolucionado de tal forma lo cual ha logrado que su campo de acción y los conocimientos en el área dental
                    se amplien de una manera extraordinario.
                    Por lo cual, han surgido numerables especialidades tales como: <br/><br/>
                  
                    Peridoncia, Ortodoncia, Endodoncia, Cariología, Implantología, Odontopediatría, Orto-odontopediatría, Odontogeriatría, Prostodoncia (Protesis Dentales),
                    Maxilofacial (Cirugia Oral), Rehabilitación Oral, Odontología Preventiva, Odontología Forense, Odontología Cosmética o Estética, Radiología Oral.
                </h5>
            </div>

            <div className="row justify-content-center" style={{marginTop:'1cm'}}>

                <section className="col-md-3 text-white p-3" style={{backgroundColor:'#196B81'}}>
                    <h2 style={{textAlign:'center'}}><b>Tips para tener dientes más sanos</b></h2>
                    <ol>
                        <li>Cepillarse los dientes al menos 2 veces al día</li>
                        <li>Cepillarse con cuidado</li>
                        <li>Adquirir un cepillo de dientes apropiado</li>
                        <li>Utilice productos con fluoruro</li>
                        <li>Cepillate la lengua</li>
                        <li>Utiliza hilo dental diariamente</li>
                        <li>Limita la ingesta de bebidas ácidas</li>
                        <li>Limita los alimentos azucarados</li>
                        <li>Consume vitaminas y minerales esenciales</li>
                        <li>Solo usa tus dientes para masticar alimentos</li>
                        <li>Proteje tus dientes de lesiones con protectores bucales</li>
                        <li>Ve al dentista cada 6 meses</li>
                    </ol>
                </section>

                <section className="col-md-3 text-black p-3" style={{backgroundColor:'#c1c3c5'}}>
                    <h2 style={{textAlign:'center'}}><b>¿ Por qué usar la seda dental ?</b></h2>
                     <p>
                        Se recomienda usar la seda dental al menos una vez al día.<br/>
                        Limpiar entre los dientes puede ayudar a prevenir las caries y enfermedad de las encías, limpiar entre los dientes ayuda
                        a sacar una película pegajosa llamada placa.<br/>
                        La placa contiene bacterias que se alimentan de restos de comida o azúcar que hay en tu boca, que luego pueden generar caries.<br/>
                        Lo recomendable es usar seda dental diariamente para mejorar la salud.<br/>
                    </p>
                    <ImagenEsp src={im3} alt="Dental 3" className="w-100 mh-50" />
                </section>

                <section className="col-md-3 bg-success text-white p-3">
                    <iframe src="https://www.youtube.com/embed/jK5imyP1VQ4" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-100 h-50"
                        style={{marginTop:'1cm'}}>
                    </iframe>
                    <h5 className="h5"><b>Uso correcto de la seda dental</b></h5>
                    <p>¡Limpiate los dientes de la mejor manera!<br/>
                        En el vídeo se explica como lavarse los dientes de la mejor manera empleando la seda dental.<br/><br/>
                        Elaborado por: Consejo General de Dentistas de España
                    </p>
                </section>

            </div>
        </>
        
     );
}
 
export default SaludDental;
