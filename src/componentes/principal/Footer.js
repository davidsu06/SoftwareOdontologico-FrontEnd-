import React from 'react';
import Styled from '@emotion/styled';

const Footer = () => {
    
    const Footer = Styled.footer`
        background-color: #006e9c;
        padding: 2px;
        margin-top: 20px;
        height: 50px;
    `;
    let year = new Date().getFullYear();

    return ( 
        <Footer>
            <div className="nav w-100 d-flex justify-content-center" >
                <p className='text-white mt-2'><b>Software Odontológico {year}</b></p>
            </div>  
        </Footer> 
    );
}
 
export default Footer;