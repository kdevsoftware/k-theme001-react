import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';

import TitleComponent2 from './PageTitleExamples/Variation2';

class PageTitle extends Component {
  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading
    } = this.props;

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="HeaderAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div
                className={cx('page-title-icon', {
                  'd-none': !enablePageTitleIcon
                })}
              >
                <i className={icon} />
              </div>
              <div>
                {heading}
                <div
                  className={cx('page-title-subheading', {
                    'd-none': !enablePageTitleSubheading
                  })}
                >
                  {subheading}
                </div>
              </div>
            </div>
            <div className="page-title-actions">
              <TitleComponent2 />
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTitle);
