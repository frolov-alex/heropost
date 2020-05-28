import React from 'react';
import FormRow from '../Forms/FormRow';
import Form from '../Forms/Form';
import SwitchField from '../Forms/SwitchField';
import SliderField from '../Forms/SliderField';
import { useFormik } from 'formik';
import { ROUTE_HOME, ROUTE_SOCIAL_PLATFORMS } from '../../const/Routes';
import { setActivePageAction, setSetupAction } from '../../store/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const plans = [
  {
    id: 'individual',
    label: 'Individual'
  },
  {
    id: 'agency',
    label: 'Agency'
  }
];

const SetupAccount = ({ app, setSetupAction, setActivePageAction, history }) => {
  const { plan, members } = app;

  const formik = useFormik({
    initialValues: { plan, members },
    onSubmit: (values) => {
      history.push(ROUTE_SOCIAL_PLATFORMS);
      setSetupAction(values);
      setActivePageAction('menu-03');
    },
  });

  const { handleSubmit, values, ...options } = formik;

  const formActions = [
    {
      id: 'btn-01',
      href: ROUTE_HOME,
      label: 'Cancel'
    },
    {
      id: 'btn-02',
      primary: true,
      label: 'Next step'
    }
  ]

  return (
    <Form type="setup-account" title="Setup Account" icon="🛠️" handleSubmit={handleSubmit} actions={formActions}>
      <FormRow>
        <SwitchField name="plan" items={plans} {...options}/>
      </FormRow>

      <FormRow type="slider">
        <SliderField
          name="members" max={20} note="Team Members"
          value={values['members']} {...options} onChange={() => {}} />
      </FormRow>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  app: state.app.signIn
});

const mapDispatchToProps = {
  setSetupAction,
  setActivePageAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SetupAccount);
