import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-danger Error text-center font-weight-bold" role="alert">
            {mensaje}
        </div>

     );
}
 
export default Error;