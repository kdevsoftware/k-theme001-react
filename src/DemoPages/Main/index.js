import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';

import AppMain from '../../Layout/AppMain';

class Main extends React.Component {
  render() {
    let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt
    } = this.props;

    return (
      <Fragment>
        <div
          className={cx(
            'app-container app-theme-' + colorScheme,
            { 'fixed-header': enableFixedHeader },
            { 'fixed-sidebar': enableFixedSidebar /* || width < 1250 */ },
            { 'fixed-footer': enableFixedFooter },
            { 'closed-sidebar': enableClosedSidebar /* || width < 1250 */ },
            {
              'closed-sidebar-mobile': closedSmallerSidebar /* || width < 1250 */
            },
            { 'sidebar-mobile-open': enableMobileMenu }
          )}
        >
          <AppMain />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProp = state => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt
});

export default withRouter(connect(mapStateToProp)(Main));
