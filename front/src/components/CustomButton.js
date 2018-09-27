import * as React from 'react'

const CustomButton = ({ label, onClick, className }) => (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
);

export default CustomButton;
