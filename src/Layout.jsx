import React from "react";

import {Menu} from './Menu.jsx';
import {Footer} from './Footer.jsx';
import {Sidebar} from './Sidebar.jsx';
import {Indice} from './Indice.jsx';

export const Layout = ({children, brand, rightMenu, leftMenu, indices}) => <div>
  <Menu brand={brand} right={rightMenu} left={leftMenu}/>
  <div style={{
      marginBottom: "90px"
    }} className="container-fluid pt-2">
    <Indice>
      {indices}
    </Indice>
    {children}
  </div>
  <Footer/>

</div>;
