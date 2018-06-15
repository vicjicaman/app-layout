import React from "react";

export const Breadcrumb = ({}) => (<nav aria-label="breadcrumb" role="navigation">
  <ol className="breadcrumb">
    <li key={1} className="breadcrumb-item"><a href="#">Home</a></li>
    <li key={2} className="breadcrumb-item"><a href="#">Library</a></li>
    <li key={3} className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
    )
