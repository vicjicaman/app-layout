import React from "react";

export const Menu = ({brand, right, left, content}) => (<nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="navbar-nav text-light mr-auto">
    {brand}
  </div>
  <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <ul className="navbar-nav mr-auto">
      {left}
    </ul>
  </div>

  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      {right}
    </ul>
    <div className="navbar-nav d-block w-100 text-light ml-auto text-right">
      {content}
    </div>
  </div>

</nav>)
