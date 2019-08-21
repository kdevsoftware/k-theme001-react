import React, { Component } from 'react';

import TitleComponent2 from './PageTitleExamples/Variation2';

class PageTitle extends Component {
  render() {
    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-car icon-gradient bg-mean-fruit" />
            </div>
            <div>
              Basic Dashboard
              <div className="page-title-subheading">
                This is an example dashboard created using build-in elements and
                components.
              </div>
            </div>
          </div>
          <div className="page-title-actions">
            <TitleComponent2 />
          </div>
        </div>
      </div>
    );
  }
}

export default PageTitle;
