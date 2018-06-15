import React from "react";


export const Menu = ({brand, items}) => (<nav className="navbar navbar-expand-md navbar-dark bg-dark">


  <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <ul className="navbar-nav mr-auto">
      <li key={1} className="nav-item active">
        <a className="nav-link" href="#">Left</a>
      </li>
      <li key={2} className="nav-item">
        <a className="nav-link" href="//codeply.com">Codeply</a>
      </li>
    </ul>
  </div>
  <div className="mx-auto order-0">
    {brand}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      {items}
    </ul>
  </div>
</nav>)
