import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3>{description}</h3>
      <span>{moment(createdAt).format('MMMM DO YYYY')}</span>
    </div>
    <h3>{numeral(amount).format('$0,0.00')}</h3>
  </Link>
);

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number
};

export default ExpenseListItem;




