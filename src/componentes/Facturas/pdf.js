import React from 'react';
import { TreeList, orderBy, filterBy, mapTree, extendDataItem,
  TreeListTextFilter, TreeListNumericFilter, TreeListDateFilter, TreeListBooleanFilter } from '@progress/kendo-react-treelist';
import { Page, Document, StyleSheet,Text, Image,Font} from '@react-pdf/renderer';

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
    
    <Page size="A5" style={styles.margen}>
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
    <Text style={styles.texto}>{facturas.tratamiento}</Text>
    <Text style={styles.subtitle}>Valor a Pagar</Text>
    <Text style={styles.texto}>$ {new Intl.NumberFormat("de-DE").format(facturas.valor)}</Text>
    <Text style={styles.subtitle}>Fecha</Text>
    <Text style={styles.texto}>{facturas.fecha}</Text>
    <Text style={styles.subtitle}>Responsable</Text>
    <Text style={styles.texto}>{facturas.documento_cajero}</Text>
    </Page>
  </Document>
);

export default MyDocument ;