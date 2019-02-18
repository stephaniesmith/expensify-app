import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};

Login.propTypes = {
  startLogin: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);

