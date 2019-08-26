import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import FontAwesomeIconsExample from './Examples/FontAwesome';
import Pe7IconsExample from './Examples/Pe7Icons';
import LinearIconsExample from './Examples/LinearIcons';

const tabsContent = [
  {
    title: 'Pe7 Icons',
    content: <Pe7IconsExample />
  },
  {
    title: 'FontAwesome',
    content: <FontAwesomeIconsExample />
  },
  {
    title: 'Linear Icons',
    content: <LinearIconsExample />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class IconsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Icons"
          subheading="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
          icon="pe-7s-phone icon-gradient bg-night-fade"
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

export default IconsExamples;
