import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing/Landing';
import Disqualification from './components/Disqualification/Disqualification';

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
          {/* New account component here */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
