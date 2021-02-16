import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './components/login/login-container';

import './App.scss';

const App = (props) => {
  return (
    <div id="wrapper">
      <Route path={'/'} render={() => <LoginContainer/>}/>
    </div>
  );
}

export default App;