import React from "react";

import {Menu} from './Menu.jsx';
import {Footer} from './Footer.jsx';
import {Sidebar} from './Sidebar.jsx';
import {Breadcrumb} from './Breadcrumb.jsx';

export const Layout = ({children, brand, items}) => <div>
  <Menu brand={brand} items={items}/>
  <div style={{
      marginBottom: "90px"
    }} className="container-fluid pt-2">
    <Breadcrumb></Breadcrumb>
    {children}
  </div>
  <Footer/>

</div>;
