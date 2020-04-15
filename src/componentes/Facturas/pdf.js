import React from 'react';
import { Document, Page, Text, View, StyleSheet,Image,Font } from '@react-pdf/renderer';

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
const MyDocument = ({facturas,pacienteActual,servicioActual,usuario}) =>{
  return(
    <Document>
      <Page size="A4" style={styles.margen}>
        <View>
          <Image
                style={styles.image}
                src="./Logo.png"
            />
        </View>
          
        <View><Text style={styles.subtitle}>Nombre del Paciente</Text></View>

        <View><Text style={styles.texto}>{pacienteActual[0].nombre + ' ' + pacienteActual[0].apellido}</Text></View>
        
        <View><Text style={styles.subtitle}>Tratamiento</Text></View>

        <View><Text style={styles.texto}>{servicioActual[0].nombre_servicio}</Text></View>

        <View><Text style={styles.subtitle}>Valor a Pagar</Text></View>

        <View><Text style={styles.texto}>$ {new Intl.NumberFormat("de-DE").format(facturas.valor)}</Text></View>

        <View><Text style={styles.subtitle}>Fecha</Text></View>

        <View><Text style={styles.texto}>{facturas.fecha}</Text></View>

        <View><Text style={styles.subtitle}>Responsable</Text></View>

        <View><Text style={styles.texto}>{usuario.nombre + ' ' + usuario.apellido}</Text></View> 
      </Page>
    </Document>
  );
}



export default MyDocument;