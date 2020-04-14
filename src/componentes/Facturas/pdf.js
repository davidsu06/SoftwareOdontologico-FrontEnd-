import React from 'react';
import { Page, Document, StyleSheet,Text, Image,Font } from '@react-pdf/renderer';

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
const MyDocument = ({facturas}) => (
  
  <Document>
    <Page size="A6" style={styles.margen}>
    <Image
        style={styles.image}
        src="./Logo.png"
    />
    <Text style={styles.title}>Factura de Pago</Text>
    <Text style={styles.subtitle}>Documento Paciente</Text>
    <Text style={styles.texto}>{facturas.documento_paciente}</Text>
    <Text style={styles.subtitle}>Nombre del Paciente</Text>
    <Text style={styles.texto}>Jeferson Echavarria Balzan</Text>
    <Text style={styles.subtitle}>Tratamiento</Text>
    <Text style={styles.texto}>Extraccion Dental</Text>
    <Text style={styles.subtitle}>Valor a Pagar</Text>
    <Text style={styles.texto}>$ 50.000</Text>
    <Text style={styles.subtitle}>Valor a Deudar</Text>
    <Text style={styles.texto}>$ 1.020.000</Text>
    
    </Page>
  </Document>
);

export default MyDocument ;