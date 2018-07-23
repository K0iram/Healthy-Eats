import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import AppLayout from './layout/main'
import Home from './components/Home'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import LogOut from './components/Auth/LogOut'
import ChangePass from './components/Auth/ChangePass'

import Danger from './components/Danger'


const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/logout" component={LogOut} />
        <Route path="/changepassword" component={ChangePass} />
        <Route path="*" component={Danger} /> {/* Always keep this last in the routes */}
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes