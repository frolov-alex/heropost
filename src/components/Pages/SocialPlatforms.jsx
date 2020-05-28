import React from 'react';
import Form from '../Forms/Form';
import FormRow from '../Forms/FormRow';
import Button from '../Forms/Button';
import { ROUTE_REVIEW, ROUTE_SETUP_ACCOUNT } from '../../const/Routes';
import { useFormik } from 'formik';
import { setActivePageAction, setPlatformsAction } from '../../store/actions';
import SocialPlatform from '../SocialPlatform';

import { connect } from 'react-redux';
import { compose } from 'redux';

import './SocialPlatforms.scss';

const socialsData = [
  {
    id: 'facebook',
    label: 'Facebook',
    count: 0
  },
  {
    id: 'instagram',
    label: 'Instagram',
    count: 0
  },
  {
    id: 'telegram',
    label: 'Telegram',
    count: 0
  },
  {
    id: 'vk',
    label: 'Vkontakte',
    count: 0
  },
  {
    id: 'youtube',
    label: 'Youtube',
    count: 0
  }
];

const SocialPlatforms = ({ setPlatformsAction, setActivePageAction, history }) => {

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setPlatformsAction(values);
      history.push(ROUTE_REVIEW);
      setActivePageAction('menu-04');
    },
  });

  const { handleSubmit, values, ...options } = formik;

  const items = socialsData.map(({ id, label }) => {
    return (
      <li className="social-platforms__item" key={id}>
        <SocialPlatform value={values[id]} id={id} compact={true} label={label} {...options} />
      </li>
    );
  });

  return (
    <Form type="social-platforms" title="Allocate Social Platforms" icon="🚀🗃" handleSubmit={handleSubmit}>
      <FormRow>
        <ul className="social-platforms">
          {items}
        </ul>
      </FormRow>

      <FormRow type="actions">
        <Button href={ROUTE_SETUP_ACCOUNT}>Cancel</Button>
        <Button type="primary">Next step</Button>
      </FormRow>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  signIn: state.app.socialPlatform
});

const mapDispatchToProps = {
  setPlatformsAction,
  setActivePageAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SocialPlatforms);
