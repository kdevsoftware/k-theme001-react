import React, { Fragment } from 'react';

import HeaderLogo from '../AppLogo';
import SearchBox from './Components/SearchBox';
import UserBox from './Components/UserBox';

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderLogo />

        <div>
          <div className="app-header-left">
            <SearchBox />
          </div>

          <div className="app-header-right">
            <UserBox />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
