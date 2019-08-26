import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import RegularTables from './RegularTables';

const Tables = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/regular-tables`} component={RegularTables} />
  </Fragment>
);

export default Tables;
