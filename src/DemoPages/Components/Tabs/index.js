import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import TabsExample from './Examples/Basic';
import CardTabsExample from './Examples/CardTabs';

const tabsContent = [
  {
    title: 'Advanced',
    content: <CardTabsExample />
  },
  {
    title: 'Basic',
    content: <TabsExample />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class TabExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Tabs"
          subheading="Tabs are used to split content between multiple sections. Wide variety available."
          icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
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

export default TabExample;
