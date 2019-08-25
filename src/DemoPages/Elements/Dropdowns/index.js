import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import DropdownStyles from './Examples/DropdownStyles';

const tabsContent = [
  {
    title: 'Regular Dropdowns',
    content: <DropdownStyles />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class DropdownExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Dropdowns"
          subheading="Multiple styles, actions and effects are available for the Archited Framework dropdown buttons."
          icon="pe-7s-umbrella icon-gradient bg-sunny-morning"
        />

        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout"
            transform={false}
            showInkBar={true}
            items={getTabs()}
          />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default DropdownExamples;
