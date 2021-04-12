import React from 'react';
import { Switch, Route } from 'react-router-dom';

import testCard from '../pages/testCard'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={testCard} />
    {/* <Route path="/signup" component={SignUp} /> */}
  </Switch>
);

export default Routes;
