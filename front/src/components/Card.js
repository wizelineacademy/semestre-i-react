import React from 'react'

const Card = ({ children, className }) => (
  <div className={`card-container ${className}`}>
    {children}
  </div>
);

export default Card
