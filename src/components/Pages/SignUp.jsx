import React from 'react';
import FormRow from '../Forms/FormRow';
import TextField from '../Forms/TextField';
import SelectField from '../Forms/SelectField';
import CheckboxField from '../Forms/CheckboxField';
import Form from '../Forms/Form';
import Button from '../Forms/Button';
import { useFormik } from 'formik';
import { ROUTE_SETUP_ACCOUNT } from '../../const/Routes';
import { setActivePageAction, setSignInAction } from '../../store/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

const SignUp = ({ app, setSignInAction, setActivePageAction, history }) => {
  const { user, email, password, passwordConfirm, timezone } = app;

  const formik = useFormik({
    initialValues: { user, email, password, passwordConfirm, timezone },
    onSubmit: (values, props) => {
      history.push(ROUTE_SETUP_ACCOUNT);
      setSignInAction(values);
      setActivePageAction('menu-02');
    },
  });

  const { handleSubmit, values, ...options } = formik;

  return (
    <Form type="sign-up" title="Sign Up" icon="📝" handleSubmit={handleSubmit}>
      <FormRow inline={true}>
        <TextField
          name="user" placeholder="Fullname" icon="user"
          value={values.user} {...options}
        />

        <TextField
          name="email" placeholder="Email address" icon="user"
          value={values.email} {...options}
        />
      </FormRow>

      <FormRow inline={true}>
        <TextField
          name="password" type="password" placeholder="Password" icon="password"
          value={values.password} {...options}
        />

        <TextField
          name="passwordConfirm" type="password" placeholder="Password" icon="password"
          value={values.passwordConfirm} {...options}
        />
      </FormRow>

      <FormRow>
        <SelectField
          name="timezone" type="select" icon="time"
          value={values.timezone} {...options}
        >
          <option value="+4">(UTC - 4:00) America/New York</option>
          <option value="+3">(UTC - 3:00) Russia/Moscow</option>
          <option value="+2">(UTC - 3:00) Russia/Ekaterinburg</option>
        </SelectField>
      </FormRow>

      <FormRow type="note">
        <CheckboxField name="terms">
          I agree to all <a href="/terms">Terms of Services</a>
        </CheckboxField>

        <p className="form__note">*after signing up you will be asked to validate your email address.</p>
      </FormRow>

      <FormRow type="actions">
        <Button disabled={true}>Cancel</Button>
        <Button type="primary">Next step</Button>
      </FormRow>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  app: state.app.signIn
});

const mapDispatchToProps = {
  setSignInAction,
  setActivePageAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SignUp);
