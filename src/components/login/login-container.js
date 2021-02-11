import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Login from './login';

const LoginContainer = () => {
  return (
    <Login/>
  );
}

const mapStateToProps = (state) => {
  return {
 
  }
}

export default compose(
  connect(mapStateToProps, null)
)(LoginContainer);