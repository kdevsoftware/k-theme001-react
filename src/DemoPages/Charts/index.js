import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import ChartsChartJs from './ChartJs/';

const Charts = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/chartjs`} component={ChartsChartJs} />
  </Fragment>
);

export default Charts;
