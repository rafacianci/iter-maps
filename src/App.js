import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './containers/Main/';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Route exact path='/' component={Main} />
    </div>
  </Router>
);

export default App;
