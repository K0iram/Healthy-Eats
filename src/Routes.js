import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import AppLayout from './layout/main'
import Home from './components/Home'
import Danger from './components/Danger'


const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="*" component={Danger} /> {/* Always keep this last in the routes */}
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes