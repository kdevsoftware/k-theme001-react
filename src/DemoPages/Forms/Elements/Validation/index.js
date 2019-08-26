import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../../Layout/AppMain/PageTitle';
import FormsFeedback from './Examples/Feedback';

const tabsContent = [
  {
    title: 'Feedback',
    content: <FormsFeedback />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class FormElementsValidation extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Form Validation"
          subheading="Inline validation is very easy to implement using the kdev-theme001-react."
          icon="lnr-picture text-danger"
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

export default FormElementsValidation;
