import React, { useState } from 'react';
import cn from 'classnames';

import './FormField.scss';
import Icon from '../Icon';

const FormField = ({ name, icon, type = 'text', placeholder, children }) => {

  const [inputFocused, setFocus] = useState(false);

  const onInputFocus = () => {
    setFocus(!inputFocused);
  };

  const FormFieldIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <div className="form-field__icon-box">
        <Icon content={icon} mix="form-field__icon"/>
      </div>
    );
  };

  const FormFieldInput = () => {
    switch (type) {
      case 'select': {
        return (
          <select
            className="form-field__select"
            name={name}
          >
            {children}
          </select>
        );
      }

      case 'checkbox': {
        return (
          <>
            <input id={name} type="checkbox" className="form-field__checkbox"/>
            <label
              htmlFor={name}
              data-on="YES"
              className="form-field__label"
            >
              {children}
            </label>
          </>
        );
      }

      default:
        return (
          <input
            className="form-field__input"
            name={name}
            type={type} placeholder={placeholder}
            onChange={onChange}
            onFocus={onInputFocus}
            onBlur={onInputFocus}
          />
        );
    }
  };

  return (
    <div className={cn('form__field', 'form-field', {
      'form-field_iconed': icon,
      'form-field_focused': inputFocused,
      [`form-field_icon_${icon}`]: icon,
      [`form-field_type_${type}`]: type,
    })}>
      <FormFieldIcon/>
      <FormFieldInput/>
    </div>
  );
};

export default FormField;
