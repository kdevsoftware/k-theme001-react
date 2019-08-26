import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import TabExample from './Tabs/';
import NotificationsExamples from './Notifications/';
import TooltipsPopoversExample from './TooltipsPopovers/';
import ModalsExample from './Modal/';
import ProgressBarsExamples from './ProgressBar/';
import CarouselExample from './Carousel/';
import MapsExample from './Maps/';

const Components = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/tabs`} component={TabExample} />
    <Route path={`${match.url}/notifications`} component={NotificationsExamples} />
    <Route path={`${match.url}/tooltips-popovers`} component={TooltipsPopoversExample} />
    <Route path={`${match.url}/progress-bar`} component={ProgressBarsExamples} />
    <Route path={`${match.url}/carousel`} component={CarouselExample} />
    <Route path={`${match.url}/modals`} component={ModalsExample} />
    <Route path={`${match.url}/maps`} component={MapsExample} />
  </Fragment>
);

export default Components;
