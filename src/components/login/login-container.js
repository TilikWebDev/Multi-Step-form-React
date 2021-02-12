import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Login from './login';
import {setSendData} from '../../redux/login-reducer';

const LoginContainer = ({send_data, setSendData}) => {
  return (
    <Login send_data={send_data} setSendData={setSendData}/>
  );
}

const mapStateToProps = (state) => {
  return {
    send_data: state.login_page.send_data
  }
}

export default compose(
  connect(mapStateToProps, {setSendData})
)(LoginContainer);