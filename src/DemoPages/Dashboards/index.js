import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import BasicDashboard from './Basic';

const Dashboards = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/basic`} component={BasicDashboard} />
  </Fragment>
);

export default Dashboards;
