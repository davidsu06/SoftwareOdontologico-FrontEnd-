import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`d-flex p-0 m-0 ${toggle && 'toggled'}`} id="wrapper">
      <Sidebar />
    
      <div id="page-content-wrapper">
        <Navbar toggle={toggle} title={title} setToggle={setToggle} />

        <div className="container-fluid">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;