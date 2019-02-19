import React from 'react';
import PropTypes from 'prop-types';

const Loading = () => {
  return (
    <div className="loader">
      <img className="loader__image" src='/images/loader.gif' />
    </div>
  );
};

Loading.propTypes = {

};

export default Loading;
