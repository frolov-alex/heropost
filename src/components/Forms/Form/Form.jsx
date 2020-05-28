import React from 'react';
import './Form.scss';
import Button from '../Button';

const Form = ({ type, icon, title, children, handleSubmit, actions }) => {

  const FormHeader = () => {
    if (!title) {
      return null;
    }

    return (
      <div className="form__header">
        <h2 className="form__title">
          <span className="form__title-icon" role="img" aria-label={title}>{icon}</span>
          {title}
        </h2>
      </div>
    );
  };

  const FormFooter = () => {

    if (!actions) {
      return null;
    }

    return (
      <div className="form__footer">
        {actions.map(({ id, disabled, label, primary, href, emoji }) => {
          return (
            <Button
              key={id} type={primary ? 'primary' : false}
              disabled={disabled} href={href}
              withoutIcon={emoji ? true : false}
            >
              {label}
              {emoji && <span role="img" aria-label="ok">👌</span>}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <form className={`form form_type_${type}`} onSubmit={handleSubmit}>
      <FormHeader/>

      <div className="form__body">
        {children}
      </div>

      <FormFooter/>
    </form>
  );
};

export default Form;
