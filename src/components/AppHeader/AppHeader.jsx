import React from 'react';

import './AppHeader.scss';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { ROUTE_HOME } from '../../const/Routes';

const AppHeader = () => {
  return (
    <header className="app-header app__header">
      <NavLink to={ROUTE_HOME}>
        <img className="app-header__logo" src={logo} alt="heropost logo"/>
      </NavLink>
    </header>
  );
};

export default AppHeader;
