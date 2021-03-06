import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    
    const { expense } = props;
    
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      focused: false,
      error: ''
    };
  }

  static propTypes = {
    onSubmit: PropTypes.func,
    expense: PropTypes.object,
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { description, amount, createdAt, note } = this.state;


    if(!description || !amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const { description, note, amount, createdAt, focused, error } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="number"
          className="text-input"
          placeholder="Amount"
          value={amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={this.onDateChange}
          focused={focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense"
          value={note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
