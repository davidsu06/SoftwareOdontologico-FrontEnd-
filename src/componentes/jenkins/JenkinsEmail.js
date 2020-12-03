import React, { useState } from 'react';
import './jenkins.css';

const JenkinsEmail = () => {
  // States
  const [url, setUrl] = useState('');

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className='jk-email-wrapper'>

        <div className='mb-4 d-flex justify-content-center'>
          <input 
            type='text'
            className='form-control jk-email-input'
            placeholder='Url'
            value={url}
            onChange={ev => setUrl(ev.target.value)}
          />
        </div>

        <div className='d-flex justify-content-center'>
          <a href={url} className='form-control jk-email-submit'>
            Enviar
          </a>
        </div>

      </div>
    </div>
  );
}
 
export default JenkinsEmail;