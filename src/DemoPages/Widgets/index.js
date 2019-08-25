import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import WidgetsChartsBoxes from './ChartBoxes';

const Widgets = ({ match }) => (
  <Fragment>
    <Route
      path={`${match.url}/dashboard-boxes`}
      component={WidgetsChartsBoxes}
    />
  </Fragment>
);

export default Widgets;
