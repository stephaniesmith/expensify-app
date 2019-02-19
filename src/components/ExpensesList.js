import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {
      expenses.length === 0
        ? <p>No expenses</p>
        : expenses.map(expense => <ExpenseListItem key={expense.id} {...expense}/>)
    }
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);