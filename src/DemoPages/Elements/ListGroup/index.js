import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ListGroupExampleBasic from './Examples/Basic/';

const tabsContent = [
  {
    title: 'Basic',
    content: <ListGroupExampleBasic />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class ListGroupExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="List Groups"
          subheading="These can be used with other components and elements to create stunning and unique new elements for your UIs."
          icon="pe-7s-paint icon-gradient bg-sunny-morning"
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

export default ListGroupExample;
