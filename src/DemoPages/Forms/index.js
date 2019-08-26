import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FormElementsLayouts from './Elements/Layouts/';
import FormElementsControls from './Elements/Controls/';
import FormElementsValidation from './Elements/Validation/';

const Forms = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/controls`} component={FormElementsControls} />
    <Route path={`${match.url}/layouts`} component={FormElementsLayouts} />
    <Route
      path={`${match.url}/validation`}
      component={FormElementsValidation}
    />
  </Fragment>
);

export default Forms;
