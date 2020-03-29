import React from 'react';

const FormularioCrearPaciente = () => {
    return ( 
        <div className="container mt-4" >
        <form>
            
            <div className="form-group">
                <label className="font-weight-bold">DOCUMENTO DE IDENTIDAD</label>
                <input type="NUMBER" className="form-control" id="Documento" placeholder="ej. 123456789"/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">NOMBRE</label>
                <input type="text" className="form-control" id="Nombre" placeholder="ej. Andres Felipe"/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">APELLIDOS</label>
                <input type="text" className="form-control" id="Apellidos" placeholder="ej. Perez Gonzalez"/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" className="form-control" id="Fnacimiento"placeholder="dd/mm/aaaa"/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">DIRECCION</label>
                <input type="text" className="form-control" id="Direccion" placeholder="ej. Calle 9 #11-01"/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">TELEFONO</label>
                <input type="number" className="form-control" id="Telefono" placeholder="ej. 3003000000"/>
            </div>


            <div className="form-group ">
                <label className="font-weight-bold">TIPO EMPLEADO</label>
                <select className="form-control selector">
                    <option>Selecione...</option>
                    <option>Administrador</option>
                    <option>Personal</option>
                    <option>Medico</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">CONTRASEÑA</label>
                <input type="password" className="form-control" id="contrasena"/>
            </div>
            
            <div className="form-group">
                <label className="font-weight-bold">CONFIRMAR CONTRASEÑA</label>
                <input type="password" className="form-control" id="confcontrasena"/>
            </div>

            <div className="form-group">
                <button type="submit"className="form-control boton font-weight-bold" >Guardar</button>
            </div>
            
        </form>
    </div>
     );
}
 
export default FormularioCrearPaciente;