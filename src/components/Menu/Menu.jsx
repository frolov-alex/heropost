import React from 'react';
import cn from 'classnames';
import './Menu.scss';
import { NavLink } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_REVIEW, ROUTE_SETUP_ACCOUNT, ROUTE_SOCIAL_PLATFORMS } from '../../const/Routes';
import { setActivePageAction, setSignInAction } from '../../store/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const menuData = [
  {
    id: 'menu-01',
    link: ROUTE_HOME,
    title: 'Sign up',
    icon: '📝',
    description: 'Please enter your best valid email address and password.',
    active: true
  },
  {
    id: 'menu-02',
    link: ROUTE_SETUP_ACCOUNT,
    title: 'Setup Account Type',
    icon: '🛠',
    description: 'Are you a solo individual or an agency with team members? Heropost will allow you to allocate sub-users into your' +
      ' account.'
  },
  {
    id: 'menu-03',
    link: ROUTE_SOCIAL_PLATFORMS,
    title: 'Allocate Social Platforms',
    icon: '🗃',
    description: 'Select specific social platforms you would like to work with and the amount of accounts needed for each.'
  },
  {
    id: 'menu-04',
    link: ROUTE_REVIEW,
    title: 'Review and Get Started',
    icon: '🚀',
    description: 'Review the changes you made to your custom Heropost account.'
  }
];

const Menu = ({ app, setActivePageAction }) => {
  const { activePage } = app;

  const items = menuData.map(({ id, link, title, icon, description, active }) => {
    return (
      <li key={id} className={cn('menu__item', { 'menu__item_active': activePage === id })}>
        <NavLink to={link} onClick={() => setActivePageAction(id)}>
          <h3 className="menu__title">
            <span role="img" aria-label={title}>{icon}</span>
            {title}
          </h3>
          <p className="menu__description">{description}</p>
        </NavLink>
      </li>
    );
  });

  return (
    <ul className="menu">
      {items}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  app: state.app
});

const mapDispatchToProps = {
  setSignInAction,
  setActivePageAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Menu);

