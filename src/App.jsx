import React from 'react';
import {
   BrowserRouter as Router, 
   Switch,
   Route,
} from 'react-router-dom';

import Routes from './routes'

import './App.css';


// My comonents
import TheNav from './components/shared/TheNav'

function App() {
  return (
    <div  className="container relative">
    <Router>
      <TheNav/>
      <Switch>
        {
          Routes.map(r => (
            <Route path={r.path} key={r.name}>
              {r.component}
            </Route>
          ))
        }
      </Switch>
    </Router>
    </div>
  );
}

export default App;
