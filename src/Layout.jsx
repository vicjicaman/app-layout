import React from "react";

import {Menu} from './Menu.jsx';
import {Footer} from './Footer.jsx';
import {Sidebar} from './Sidebar.jsx';
import {Indice} from './Indice.jsx';

export const Layout = ({children, brand, rightMenu, leftMenu, content,  indices}) => <div>
  <Menu brand={brand} right={rightMenu} left={leftMenu} content={content}/>
  <div style={{
      marginBottom: "90px"
    }} className="container-fluid pt-1">
    <Indice>
      {indices}
    </Indice>
    {children}
  </div>
  <Footer/>

</div>;
