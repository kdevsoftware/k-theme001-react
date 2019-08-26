import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import CardsBasicExample from './Examples/Basic';
import CardsColors from './Examples/Colors';

const tabsContent = [
  {
    title: 'Basic',
    content: <CardsBasicExample />
  },
  {
    title: 'Color States',
    content: <CardsColors />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class CardsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Cards"
          subheading="Wide selection of cards with multiple styles, borders, actions and hover effects."
          icon="pe-7s-stopwatch icon-gradient bg-amy-crisp"
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

export default CardsExamples;
