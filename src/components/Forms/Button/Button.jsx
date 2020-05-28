import React from 'react';
import cn from 'classnames';

import './Button.scss';
import { NavLink } from 'react-router-dom';

const Button = ({ type, disabled, children, href }) => {

  const Tag = href ? NavLink : "button";

  return (
    <Tag
      className={cn('button', {'disabled': disabled, [`button_type_${type}`]: type,})}
      disabled={disabled}
      to={href}
    >
      {children}
    </Tag>
  );
};

export default Button;
