import React,{useState,useContext} from 'react';
import facturasContext from '../../context/facturas/facturasContext';
const FormularioFacturas = () => {
    const [factura,guardarfactura]= useState({
        valor: '',
        fecha:'1998-11-14',
        documento_paciente:'',
        documento_cajero:"jeferson echavrria gomez"
    });

    const facturaContext = useContext(facturasContext);
    const {agregarFacturas} = facturaContext;
    
    const BotonGuardar= () =>{
        agregarFacturas(factura);
    }

    const Guardar= e =>{
        guardarfactura({
            ...factura,
            [e.target.name]: e.target.value
        })
        console.log(factura);
    }

    return (  
        <div className="container mt-4 pfacturas" >
        
        <form>

        <div className="form-group ">
                <label className="font-weight-bold">DOCUMENTO DEL PACIENTE</label>
                <select className="form-control selector" id="select" name="documento_paciente" onChange={Guardar}>
                    <option value="primera">Selecione...</option>
                    <option value="123">123-jeferson echavarria</option>
                    <option value="456">456-juan jose gonzalez</option>
                    <option value="789">789-jojan guzman</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold" onChange={Guardar}>TRATAMIENTO</label>
                <select className="form-control selector" id="select"name="tratamiento">
                    <option value="primera">Selecione...</option>
                    <option value="001">001-tratamiento dental</option>
                    <option value="002">002-limpieza</option>
                    <option value="003">003-otro</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">VALOR</label>
                <input type="number" className="form-control" name="valor" onChange={Guardar}/>
            </div> 

            <div className="form-group">
                <input type="submit"
                className="form-control boton font-weight-bold" 
                value="Generar Factura"
                onClick={BotonGuardar}
                />
            </div>           
        </form>
    </div>
    );
}
 
export default FormularioFacturas;