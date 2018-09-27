import * as React from 'react'

const CustomInput = ({ label, value, onChange, className }) => (
  <div className={`custom-input ${className}`}>
    {label && (
      <label>{label}</label>
    )}
    <input value={value} onChange={onChange} />
  </div>
);

export default CustomInput
