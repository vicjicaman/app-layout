import React from "react";

import {Menu} from './Menu.jsx';
import {Footer} from './Footer.jsx';
import {Sidebar} from './Sidebar.jsx';

export const Layout = ({children, brand, items}) => <div>
  <Menu brand={brand} items={items}/>
  <Sidebar>
  <div className="container-fluid">{children}</div>
  </Sidebar>
  <Footer/>
</div>;
