import React from 'react';
import cn from 'classnames';

import './Button.scss';
import { NavLink } from 'react-router-dom';

const Button = ({ type, disabled, children, href, withoutIcon }) => {

  const Tag = href ? NavLink : "button";

  return (
    <Tag
      className={cn('button', {'disabled': disabled, [`button_type_${type}`]: type, 'without-icon': withoutIcon})}
      disabled={disabled}
      to={href}
    >
      {children}
    </Tag>
  );
};

export default Button;
