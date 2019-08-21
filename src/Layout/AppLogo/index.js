import React, { Fragment } from 'react';
import Hamburger from 'react-hamburgers';

class HeaderLogo extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-header__logo">
          <div className="logo-src" />

          <div className="header__pane ml-auto">
            <div>
              <Hamburger />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderLogo;
