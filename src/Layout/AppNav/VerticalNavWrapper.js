import React, { Component, Fragment } from 'react';
import MetisMenu from 'react-metismenu';

import {
  MainNav,
  ComponentsNav,
  FormsNav,
  WidgetsNav,
  ChartsNav
} from './NavItem';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">UI Components</h5>
        <MetisMenu
          content={ComponentsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Widgets</h5>
        <MetisMenu
          content={WidgetsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu
          content={FormsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu
          content={ChartsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </Fragment>
    );
  }
}

export default Nav;
