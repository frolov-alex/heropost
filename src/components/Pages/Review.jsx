import React from 'react';
import Form from '../Forms/Form';
import FormRow from '../Forms/FormRow';
import Button from '../Forms/Button';
import { ROUTE_SOCIAL_PLATFORMS } from '../../const/Routes';

import { connect } from 'react-redux';
import { compose } from 'redux';

const Review = ({ app }) => {
  return (
    <Form type="review" title="Review" icon="🚀">

      <pre>
        {JSON.stringify(app, null, 2)}
      </pre>

      <FormRow type="actions">
        <Button href={ROUTE_SOCIAL_PLATFORMS}>Cancel</Button>
        <Button type="primary">Get Started <span role="img" aria-label="ok">👌</span></Button>
      </FormRow>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  app: state
});

export default compose(
  connect(mapStateToProps, {}),
)(Review);
