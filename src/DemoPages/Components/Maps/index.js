import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import VectorMapsExample from './Examples/VectorMaps';
import GoogleMapsExample from './Examples/GoogleMaps';

const tabsContent = [
  {
    title: 'Vector Maps',
    content: <VectorMapsExample />
  },
  {
    title: 'Google Maps',
    content: <GoogleMapsExample />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class MapsExample extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Maps"
          subheading="Implement in your applications Google or vector maps."
          icon="pe-7s-map icon-gradient bg-premium-dark"
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

export default MapsExample;
