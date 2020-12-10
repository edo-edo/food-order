import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../../App';

const Router:React.FC = () => (
  <div>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </div>
);
export default Router;
