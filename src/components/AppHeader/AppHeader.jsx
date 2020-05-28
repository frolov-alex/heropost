import React from 'react';

import './AppHeader.scss';
import logo from './logo.png';

const AppHeader = () => {
  return (
    <header className="app-header app__header">
      <img className="app-header__logo" src={logo} alt="heropost logo" />
    </header>
  );
};

export default AppHeader;
