import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>It's time to get your expenses under control.</p>
        <button onClick={startLogin}>Login</button>
      </div>
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

