import React from 'react';
import './SwitchField.scss';

const SwitchField = ({ items, name, handleChange }) => {

  const switchItems = items.map(({ id, label }) => {
    return (
      <div className="switch-field__item" key={id}>
        <input id={id} type="radio" name={name} onChange={handleChange} value={label}/>
        <label htmlFor={id}>{label}</label>
      </div>
    );
  });

  return (
    <div className="switch-field">
      {switchItems}
    </div>
  );
};

export default SwitchField;
