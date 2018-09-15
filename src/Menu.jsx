import React from "react";


export const Menu = ({brand, right, left}) => (<nav className="navbar navbar-expand-md navbar-dark bg-dark">


  <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <ul className="navbar-nav mr-auto">
      {left}
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
      {right}
    </ul>
  </div>
</nav>)
