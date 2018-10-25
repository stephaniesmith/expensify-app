import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    const { description, note, amount, createdAt } = props.expense;

    this.state = {
      description: description || '',
      note: note || '',
      amount: amount ? (amount / 100).toString() : '',
      createdAt: createdAt ? moment(createdAt) : moment(),
      focused: false,
      error: ''
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description}));
  }

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = e => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = createdAt => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  }

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
      })
    }
  }

  render() {
    const { description, note, amount, createdAt, focused, error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
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
            placeholder="Add a note for your expense"
            value={note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
};
