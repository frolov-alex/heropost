import React from 'react';
import './CheckboxField.scss';

const CheckboxField = ({ name, icon, type = 'text', children }) => {
  return (
    <div className="form__field form-field form-field_type_checkbox">
      <input id={name} type="checkbox" className="form-field__checkbox"/>
      <label
        htmlFor={name}
        data-on="YES"
        className="form-field__label"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxField;
