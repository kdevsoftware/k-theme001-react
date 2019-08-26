import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../../Layout/AppMain/PageTitle';
import FormGrid from './Examples/FormGrid';
import FormGridFormRow from './Examples/FormGridFormRow';

const tabsContent = [
  {
    title: 'Layout ',
    content: <FormGridFormRow />
  },
  {
    title: 'Grid',
    content: <FormGrid />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class FormElementsLayouts extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Form Layouts"
          subheading="Build whatever layout you need with my kdev-theme001-react framework."
          icon="pe-7s-graph text-success"
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

export default FormElementsLayouts;
