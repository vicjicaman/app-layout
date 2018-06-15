import React from "react";

import {Menu} from './Menu.jsx';
import {Footer} from './Footer.jsx';
import {Sidebar} from './Sidebar.jsx';
import {Breadcrumb} from './Breadcrumb.jsx';

export const Layout = ({children, brand, items}) => <div>
  <Menu brand={brand} items={items}/>

  <div className="container-fluid">
    <Sidebar>
      <div className="container-fluid">
        <Breadcrumb></Breadcrumb>
        <hr/> {children}
      </div>
    </Sidebar>
  </div>
  <Footer/>

</div>;
