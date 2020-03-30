import React from 'react';


const MenuAdmin = ({actualizarBandera,Bandera,titulo}) => {

    
    const esconder = ()=>{
        
        if (Bandera===true){
            actualizarBandera(false);
            console.log(Bandera);
            return;
        }
        else {
            actualizarBandera(true);
            console.log(Bandera);
            return;
        }
        
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light border-bottom navhor  alineartitulo">
            <button onClick={esconder} className="btn" id="menu-toggle"><span className="navbar-toggler-icon"></span></button>
            <h1 className="alineartitulo">{titulo}</h1>
            <button className="btn" id="menu-toggle alineartitulo"><span className="alineartitulo">cerrar sesion</span></button>
        </nav>
     );
}
 
export default MenuAdmin;