import React, { Fragment } from 'react';
import {
  
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { ToastContainer } from 'react-toastify';
import ResizeDetector from 'react-resize-detector';

import Dashboards from '../../DemoPages/Dashboards';
import Elements from '../../DemoPages/Elements';
import Components from '../../DemoPages/Components';
import Tables from '../../DemoPages/Tables';
import Widgets from '../../DemoPages/Widgets';
import Forms from '../../DemoPages/Forms';
import Charts from '../../DemoPages/Charts';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

class Main extends React.Component {
  render() {
    let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu
    } = this.props;

    return (
      <ResizeDetector
        handleWidth
        render={({ width }) => (
          <Fragment>
            <div
              className={cx(
                'app-container app-theme-' + colorScheme,
                { 'fixed-header': enableFixedHeader },
                { 'fixed-sidebar': enableFixedSidebar || width < 1250 },
                { 'fixed-footer': enableFixedFooter },
                { 'closed-sidebar': enableClosedSidebar || width < 1250 },
                {
                  'closed-sidebar-mobile': closedSmallerSidebar || width < 1250
                },
                { 'sidebar-mobile-open': enableMobileMenu }
              )}
            >
              <AppHeader />

              <div className="app-main">
                <AppSidebar />

                <div className="app-main__outer">
                  <div className="app-main__inner">
                    <Route path="/dashboards" component={Dashboards} />
                    <Route path="/elements" component={Elements} />
                    <Route path="/components" component={Components} />
                    <Route path="/tables" component={Tables} />
                    <Route path="/widgets" component={Widgets} />
                    <Route path="/forms" component={Forms} />
                    <Route path="/charts" component={Charts} />

                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/dashboards/basic" />}
                    />
                  </div>

                  <AppFooter />
                </div>
              </div>

              <ToastContainer />
            </div>
          </Fragment>
        )}
      />
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
