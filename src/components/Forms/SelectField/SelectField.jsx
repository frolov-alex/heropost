import React from 'react';
import cn from 'classnames';

import './SelectField.scss';
import Icon from '../../Icon';

const SelectField = ({ name, icon, type = 'text', children, handleChange }) => {

  const SelectFieldIcon = () => {
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
      [`form-field_icon_${icon}`]: icon,
      [`form-field_type_${type}`]: type,
    })}>
      <SelectFieldIcon/>
      <select
        className="form-field__select"
        name={name}
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectField;
