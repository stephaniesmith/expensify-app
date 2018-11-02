import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

class ExpenseListFilters extends Component {

  state = {
    calenderFocused: null,

  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  render() {
    const { dispatch, filters } = this.props;
    const { calenderFocused } = this.state;

    return (
      <div>
        <input 
          type="text" 
          value={filters.text} 
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
        />
        <select
          value={filters.sortBY}
          onChange={e => {
            e.target.value ==='date'
              ? dispatch(sortByDate(e.target.value))
              : dispatch(sortByAmount(e.target.value));
          }}
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

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);