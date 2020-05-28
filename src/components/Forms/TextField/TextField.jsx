import React, { useState } from 'react';
import cn from 'classnames';

import './TextField.scss';
import Icon from '../../Icon';

const TextField = ({ name, icon, type = 'text', placeholder, value, handleChange }) => {

  const [inputFocused, setFocus] = useState(false);

  const onInputFocus = () => {
    setFocus(!inputFocused);
  };


  const TextFieldIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <div className="form-field__icon-box">
        <Icon content={icon} mix="form-field__icon"/>
      </div>
    );
  };

  return (
    <div className={cn('form__field', 'form-field', {
      'form-field_iconed': icon,
      'form-field_focused': inputFocused,
      [`form-field_icon_${icon}`]: icon,
      [`form-field_type_${type}`]: type,
    })}>
      <TextFieldIcon/>
      <input
        className="form-field__input"
        name={name}
        type={type} placeholder={placeholder}
        onChange={handleChange}
        onFocus={onInputFocus}
        onBlur={onInputFocus}
        value={value}
      />
    </div>
  );
};

export default TextField;
