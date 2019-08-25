import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import ButtonsStandard from './Button/Standard/';
import DropdownExamples from './Dropdowns/';
import BadgesLabels from './BadgesLabels/';
import IconsExamples from './Icons/';
import CardsExamples from './Cards/';
import ListGroupExample from '../Elements/ListGroup/';
import NavigationExample from './Navs/';
import UtilitiesExamples from '../Elements/Utilities/';

const Elements = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/buttons-standard`} component={ButtonsStandard} />
    <Route path={`${match.url}/dropdowns`} component={DropdownExamples} />
    <Route path={`${match.url}/badges-labels`} component={BadgesLabels} />
    <Route path={`${match.url}/icons`} component={IconsExamples} />
    <Route path={`${match.url}/cards`} component={CardsExamples} />
    <Route path={`${match.url}/list-group`} component={ListGroupExample} />
    <Route path={`${match.url}/navigation`} component={NavigationExample} />
    <Route path={`${match.url}/utilities`} component={UtilitiesExamples} />
  </Fragment>
);

export default Elements;
