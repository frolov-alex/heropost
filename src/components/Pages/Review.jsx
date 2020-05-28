import React from 'react';
import Form from '../Forms/Form';
import { ROUTE_SOCIAL_PLATFORMS } from '../../const/Routes';

import { connect } from 'react-redux';
import { compose } from 'redux';

const Review = ({ app }) => {

  const formActions = [
    {
      id: 'btn-01',
      href: ROUTE_SOCIAL_PLATFORMS,
      label: 'Cancel'
    },
    {
      id: 'btn-02',
      primary: true,
      label: 'Get Started',
      emoji: true
    }
  ]

  return (
    <Form type="review" title="Review" icon="🚀" actions={formActions}>
      <pre>
        {JSON.stringify(app, null, 2)}
      </pre>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  app: state
});

export default compose(
  connect(mapStateToProps, {}),
)(Review);
