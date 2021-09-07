import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

const Routes: React.FC = (): React.ReactElement => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route
          exact path ='/home'
          component={Home}
        />
        <Route
          exact path='*'
          component={NotFound}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;