import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {gotoStep} from '../../redux/login-reducer';
import {getCurrentStep} from '../../redux/login-selector';
import Login from './login';

const LoginContainer = ({form_data, steps, gotoStep}) => {
  return (
    <Login form_data={form_data} steps={steps} gotoStep={gotoStep}/>
  );
}

const mapStateToProps = (state) => {
  return {
      form_data: state.login.data,
      steps: getCurrentStep(state)
  }
}

export default compose(
  connect(mapStateToProps, {gotoStep})
)(LoginContainer);