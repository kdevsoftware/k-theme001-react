import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

import Dashboards from '../../DemoPages/Dashboards';
import Elements from '../../DemoPages/Elements';
import Components from '../../DemoPages/Components';
import Tables from '../../DemoPages/Tables';
import Widgets from '../../DemoPages/Widgets';
import Forms from '../../DemoPages/Forms';
import Charts from '../../DemoPages/Charts';

const AppMain = () => {
  return (
    <div>
      <Route path="/dashboards" component={Dashboards} />
      <Route path="/elements" component={Elements} />
      <Route path="/components" component={Components} />
      <Route path="/tables" component={Tables} />
      <Route path="/widgets" component={Widgets} />
      <Route path="/forms" component={Forms} />
      <Route path="/charts" component={Charts} />

      <Route
        exact
        path="/"
        render={() => <Redirect to="/dashboards/basic" />}
      />
    </div>
  );
};

export default AppMain;
