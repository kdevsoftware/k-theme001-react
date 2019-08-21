import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './assets/base.css';
import * as serviceWorker from './serviceWorker';
import Main from './DemoPages/Main';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <HashRouter>
      <Component />
    </HashRouter>,
    rootElement
  );
};

renderApp(Main);

serviceWorker.unregister();
