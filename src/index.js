import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Main from './DemoPages/Main';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(<Component />, rootElement);
};

renderApp(Main);

serviceWorker.unregister();
