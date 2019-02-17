import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpense extends Component {
  static propTypes = {
    expense: PropTypes.object,
    startEditExpense: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    startRemoveExpense: PropTypes.func.isRequired,
  };
  
  onSubmit = expense => {
    const { id } = this.props.expense;

    this.props.startEditExpense(id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    const { id } = this.props.expense;

    this.props.startRemoveExpense({ id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button 
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);