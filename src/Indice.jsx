import React from "react";

export const Indice = ({children}) => (<nav aria-label="breadcrumb" role="navigation">
  <ol className="breadcrumb">
    {children}
  </ol>
</nav>
    )
