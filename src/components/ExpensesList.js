import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div>
    {
      expenses.length === 0
        ? <p>No expenses</p>
        : expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>)
    }
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);