import React,{useState,useContext,useEffect} from 'react';
import facturasContext from '../../context/facturas/facturasContext';
const FormularioFacturas = () => {
    const [factura,guardarfactura]= useState({
        valor: '',
        fecha:Date.now(),
        tratamiento:"",
        documento_paciente:'',
        documento_cajero:"jeferson echavrria gomez"
    });

    const facturaContext = useContext(facturasContext);
    const {facturas, agregarFacturas, listarServicios} = facturaContext;

    useEffect(() => {
        listarServicios();   
        // eslint-disable-next-line
    }, []);
    const BotonGuardar= e =>{
        e.preventDefault();
        agregarFacturas(factura);
        guardarfactura({
            ...factura,
            valor:'',
            documento_paciente:'primera',
            tratamiento: "primera"
        })
    }

    const Guardar= e =>{
        guardarfactura({
            ...factura,
            [e.target.name]: e.target.value
        })
        console.log(factura);
    }

    return (  
        <>
        <div className="container mt-4 pfacturas" >
        
        <form onSubmit={BotonGuardar}>

        <div className="form-group ">
                <label className="font-weight-bold">DOCUMENTO DEL PACIENTE</label>
                <select className="form-control selector" id="select" name="documento_paciente" onChange={Guardar} value={factura.documento_paciente}>
                    <option value="primera">Selecione...</option>
                    <option value="123">123-jeferson echavarria</option>
                    <option value="456">456-juan jose gonzalez</option>
                    <option value="789">789-jojan guzman</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold" onChange={Guardar}>TRATAMIENTO</label>
                <select className="form-control selector" id="select" name="tratamiento" onChange={Guardar} value={factura.tratamiento}>
                <option value="primera">Selecione...</option>  
                {facturas.length === 0
                ? (<option>no hay servicios</option>  )
                : facturas.map(servicios => (
                <option value={servicios._id}>{servicios.nombre_servicio}</option> 
                    ))
                                }
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">VALOR</label>
                <input type="number" className="form-control" name="valor" onChange={Guardar} value={factura.valor}/>
            </div> 

            <div className="form-group">
                <input type="submit"
                className="form-control boton font-weight-bold" 
                value="Generar Factura"
                />
            </div>           
        </form>
    </div>
    </>
    );
}
 
export default FormularioFacturas;