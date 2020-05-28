import React from 'react';
import AppHeader from '../AppHeader';
import Menu from '../Menu/Menu';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { SocialPlatforms, Review, SetupAccount, SignUp } from '../Pages';
import './App.scss';
import { setActivePageAction } from '../../store/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { ROUTE_HOME, ROUTE_REVIEW, ROUTE_SETUP_ACCOUNT, ROUTE_SOCIAL_PLATFORMS } from '../../const/Routes';

function App({ history: { location: { pathname } }, setActivePageAction }) {

  switch (pathname) {
    case ROUTE_SETUP_ACCOUNT:
      setActivePageAction('menu-02');
      break;

    case ROUTE_SOCIAL_PLATFORMS:
      setActivePageAction('menu-03');
      break;

    case ROUTE_REVIEW:
      setActivePageAction('menu-04');
      break;

    default:
      setActivePageAction('menu-01');
  }

  return (
    <main className="app">
      <AppHeader/>

      <main className="app__body">
        <div className="reg-form">

          <Switch>
            <Route path={ROUTE_HOME} exact component={SignUp}/>
            <Route path={ROUTE_SETUP_ACCOUNT} exact component={SetupAccount}/>
            <Route path={ROUTE_SOCIAL_PLATFORMS} exact component={SocialPlatforms}/>
            <Route path={ROUTE_REVIEW} exact component={Review}/>
            <Redirect to={ROUTE_HOME}/>
          </Switch>

        </div>
      </main>

      <aside className="app__aside">
        <Menu/>
      </aside>
    </main>
  );
}

const mapStateToProps = (state) => ({
  app: state.app.signIn
});

const mapDispatchToProps = {
  setActivePageAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(withRouter(App));
