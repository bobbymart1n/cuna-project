import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing/Landing';
import Disqualification from './components/Disqualification/Disqualification';
import NewAccount from './components/NewAccount/NewAccount';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/disqualified'>
          <Disqualification />
        </Route>
        <Route path='/new-account'>
          <NewAccount />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
