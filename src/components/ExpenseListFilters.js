import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

export class ExpenseListFilters extends Component {

  state = {
    calenderFocused: null,

  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = e => {
    this.props.setFilter(e.target.value);
  };

  onSortChange = e => {
    const { sortByDate, sortByAmount } = this.props;

    e.target.value === 'date'
      ? sortByDate(e.target.value)
      : sortByAmount(e.target.value);
  }

  render() {
    const { filters } = this.props;

    const { calenderFocused } = this.state;

    return (
      <div>
        <input 
          type="text" 
          value={filters.text} 
          onChange={this.onTextChange}
        />
        <select
          value={filters.sortBY}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: text => dispatch(setFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);