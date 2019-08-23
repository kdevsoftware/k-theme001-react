import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/base.css';
import * as serviceWorker from './serviceWorker';
import Main from './DemoPages/Main';
import configureStore from './config/configureStore';

const rootElement = document.getElementById('root');
const store = configureStore();

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

serviceWorker.unregister();
