import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PDFViewer, Document, Page, Text, StyleSheet,Image, View} from '@react-pdf/renderer';
import facturaContext from '../../context/facturas/facturasContext';
import logo from '../../assets/img/Logo.png'

// Create Document Component
const MyDocument = () => {
  const { facturaseleccionada, seleccionarFactura } = useContext(facturaContext);
  let { slug } = useParams();

  useEffect(() => {
    seleccionarFactura(slug); // eslint-disable-next-line
  }, []);

  // Protecting component
  const styleNotAuth = {
    display: 'flex',
    padding: '1rem 0rem 2rem 1rem',
    justifyContent: 'center'
  };

  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('token');
    if (!item) {
        return <h3 style={styleNotAuth}>No autorizado</h3>
    }
  }
  
  if(!facturaseleccionada) return null

  return (
    <div className="mt-5 container">
      <PDFViewer className="w-100 alturapdf">
      <Document orientation="landscape" >
        <Page size="A4" orientation="landscape" style={styles.page}>

          <View style={styles.header}>
            <Image style={styles.imagen} src={logo} />
            <Text style={styles.titulo}>CONSULTORIO ODONTOLOGICO</Text>
            <View style={styles.textosubheader}>
              <Text style={styles.textoheader}>Numero de factura:{facturaseleccionada?._id} </Text>
              <Text style={styles.textoheader}>Fecha Generación: {facturaseleccionada?.fecha}</Text>
              <Text style={styles.textoheader}>Fecha Vencimiento:{facturaseleccionada?.fecha}</Text>
            </View>
          </View>

          <View style={styles.fila1dec2}>
              <View style={styles.fila1dec2}>
                <Text style={styles.texto11}>Documento Paciente:</Text>
                <Text style={styles.texto2}>{facturaseleccionada?.documento_paciente}</Text>
              </View>
              <View style={styles.fila1dec2}>
                <Text style={styles.texto11}>Nombre Paciente:</Text>
                <Text style={styles.texto2q}>{facturaseleccionada?.nombre_paciente}</Text>
              </View>
          </View>

          <View style={styles.fila1dec2}>
              <View style={styles.fila1dec2}>
                <Text style={styles.texto11}>Documento Cajero:</Text>
                <Text style={styles.texto2}>{facturaseleccionada?.documento_cajero}</Text>
              </View>
              <View style={styles.fila1dec2}>
                <Text style={styles.texto11}>Nombre Cajero:</Text>
                <Text style={styles.texto2q}>{facturaseleccionada?.nombre_cajero}</Text>
              </View>
          </View>

          <View style={styles.columnatrata}>
            <View style={styles.tamano}>
              <Text style={styles.concepto}>Concepto</Text>
            </View>
            <View style={styles.tamano}>
              <Text style={styles.valor}>Valor</Text>
            </View>
          </View>

          <View style={styles.colunombretrat}>
            <View style={styles.tamano}>
            <Text style={styles.concepto}>{facturaseleccionada?.tratamiento}</Text>
            </View>
            <View style={styles.tamano}>
            <Text style={styles.valor}>{new Intl.NumberFormat("de-DE").format(facturaseleccionada?.valor)}</Text>
            </View>
          </View>
          <View style={styles.columtotal}>
            <View style={styles.tamano}>
            <Text style={styles.total}>Total</Text>
            </View>
            <View style={styles.tamano}>
            <Text style={styles.valor}>{new Intl.NumberFormat("de-DE").format(facturaseleccionada?.valor)}</Text>
            </View>
          </View>
          <Text>
              En cumplimiento de lo establecido en la ley estatutaria 1581 del 2012 de protecccion
              de datos de caracter personal, le comunicamos que los datos 
              que usted nos facilite quedaran incorporados y seran tratados 
              en los ficheros titularidad de (nombre del responsable del fichero)
              con el fin de poderle prestar nuestros servicios, asi como para 
              mantenerle informado sobre cuestiones relativas nuestros servicios.
          </Text>
        </Page>
      </Document>
    </PDFViewer>
    </div>
  );
};

export default React.memo(MyDocument);

// Creación de estilos de PDF render
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 30
  },
  nomdoc: {
    flexDirection: 'row',
    marginTop: 20,
  },
  fila1dec2:{
    flexDirection: 'row',
    marginTop: 5
  },
  texto11:{
    textAlign: 'left',
    borderColor: '#39aa88',
    backgroundColor: '#39aa88',
  },
  texto2:{
    paddingLeft: 5,
    paddingRight: 50
  },
  texto2q:{
    paddingLeft: 5,
    paddingRight: 50
  },
  header:{
    flexDirection: 'row'
  },
  titulo:{
    paddingTop: 80,
    paddingLeft: 137,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoheader:{
    fontSize: 12,
    paddingTop: 6,
    borderBottom: 3,
    borderColor: "#39aa88"
  },
  textosubheader:{
    paddingTop: 10,
    paddingLeft: 30
  },
  imagen:{
    width: 100,
    height: 100,
    paddingLeft: 5
  },
  concepto:{
    textAlign: 'left',
  },
  valor:{
    textAlign: 'left'
  },
  columnatrata:{
    flexDirection: 'row',
    backgroundColor: '#39aa88',
    marginTop: 20,
  },
  colunombretrat:{
    flexDirection: 'row',
    marginTop: 20,
  },
  columtotal:{
    flexDirection: 'row',
    marginTop: 230,
    marginBottom: 20,
  },
  tamano:{
    width: '50%'
  },
  total:{
    backgroundColor: '#39aa88',
  },
});
