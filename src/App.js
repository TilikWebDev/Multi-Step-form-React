import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './components/login/login-container';

import './app.css';

const App = (props) => {
  return (
    <div id="wrapper">
      <Route exact path={'/'} render={() => <LoginContainer/>}/>
    </div>
  );
}

export default App;