import React from 'react';

const DataCard = ({ cardimage, title, children }) => (
 
  <div className="data-card">
    <img src={cardimage} style={ {margin:'5% 25%', width: '200px', height: '150px' }} />
    <h2>{title}</h2>
    <div className="data-content">{children}</div>
  </div>
);

export default DataCard;
