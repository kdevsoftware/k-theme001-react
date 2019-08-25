import React, { Component, Fragment } from 'react';
import MetisMenu from 'react-metismenu';

import { NavItems } from './NavItems';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">UI Templates</h5>
        <MetisMenu
          content={NavItems}
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
