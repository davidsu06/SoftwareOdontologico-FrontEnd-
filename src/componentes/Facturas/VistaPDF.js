import React, {useContext} from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet,Image,Font, View } from '@react-pdf/renderer';
import facturaContext from '../../context/facturas/facturasContext';
import logo from '../../media/Logo.png'


// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    borderStyle: 'solid',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Oswald',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 25
  },

  texto: {
    fontSize: 10,
    textAlign: 'center',
    margin: 4
  },
  margen:{
    borderStyle: 'solid',
    borderColor: 'black'
  }
});

// Create Document Component
const MyDocument = () => {

  const {facturaseleccionada} = useContext(facturaContext);
  const {documento_paciente, nombre_paciente, documento_cajero, nombre_cajero, valor, fecha, tratamiento} = facturaseleccionada;

  return (
    <>
      {facturaseleccionada
        ?(
          <div className="mt-5 container">
              <PDFViewer className="w-100 alturapdf">
                <Document orientation="landscape">
                  <Page size="A6" style={styles.margen}>
                      <Image style={styles.image} src={logo}/>
                      
                      <Text style={styles.subtitle}>Documento del Paciente</Text>
                      <Text style={styles.texto}>{documento_paciente}</Text> 
                      <Text style={styles.subtitle}>Nombre del Paciente</Text>
                      <Text style={styles.texto}>{nombre_paciente}</Text>
                      <Text style={styles.subtitle}>Tratamiento</Text>
                      <Text style={styles.texto}>{tratamiento}</Text>
                      <Text style={styles.subtitle}>Valor a Pagar</Text>
                      <Text style={styles.texto}>$ {valor}</Text>
                      <Text style={styles.subtitle}>Fecha</Text>
                      <Text style={styles.texto}>{fecha}</Text>
                      <Text style={styles.subtitle}>Documento del Responsable</Text>
                      <Text style={styles.subtitle}>{documento_cajero}</Text>
                      <Text style={styles.subtitle}>Nombre del Responsable</Text>
                      <Text style={styles.texto}>{nombre_cajero}</Text>
                  </Page>
                </Document>
              </PDFViewer>
            </div>
        )

        : null
      }
    </>
  );
}

export default MyDocument;