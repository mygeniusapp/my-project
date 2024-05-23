import React from 'react';

const AttractionCard = ({ cardimage, title, children }) => (
 
  <div className="attraction-card">
    <img src={cardimage}  style={ {margin:'5% 20%', width: '400px', height: '220px' }} />
    <h2>{title}</h2>
    <div className="data-content">{children}</div>
  </div>
);

export default AttractionCard;
