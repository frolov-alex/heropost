import React from 'react';
import cn from 'classnames';

import './FormRow.scss';

const FormRow = ({ inline, children, type }) => {
  return (
    <div className={cn(
      'form-row', 'form__row',
      { 'form-row_inline': inline, [`form-row_type_${type}`]: type },
    )}
    >
      {children}
    </div>
  );
};

export default FormRow;
