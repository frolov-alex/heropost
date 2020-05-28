import React from 'react';
import './Form.scss';

const Form = ({ type, icon, title, children, handleSubmit }) => {

  const FormHeader = () => {
    if (!title) {
      return null;
    }

    return (
      <header className="form__header">
        <h2 className="form__title">
          <span className="form__title-icon" role="img" aria-label={title}>{icon}</span>
          {title}
        </h2>
      </header>
    );
  };

  return (
    <section className={`form form_type_${type}`}>

      <FormHeader/>

      <form className="form__body" onSubmit={handleSubmit}>
        {children}
      </form>

    </section>
  );
};

export default Form;
