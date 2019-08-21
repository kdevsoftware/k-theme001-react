import React, { Component, Fragment } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import HeaderLogo from '../AppLogo';
import Nav from '../AppNav/VerticalNavWrapper';
import backgroundImage from '../../assets/images/sidebar/city1.jpg';

class AppSidebar extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className="sidebar-mobile-overlay" /> */}

        <div className="app-sidebar bg-royal sidebar-shadow">
          <HeaderLogo />

          <PerfectScrollbar>
            <div className="app-sidebar__inner">
              <Nav />
            </div>
          </PerfectScrollbar>

          <div
            className="app-sidebar-bg opacity-06"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default AppSidebar;
