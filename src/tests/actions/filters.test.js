import { setEndDate, setStartDate, setFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('start date action', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('end date action', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('filter action', () => {
  const textData = {
    type: 'SET_FILTER',
    text: 'test'
  };
  const action = setFilter(textData.text);
  expect(action).toEqual(textData);
});

test('filter action default', () => {
  const textData = {
    type: 'SET_FILTER',
    text: ''
  };
  const action = setFilter();
  expect(action).toEqual(textData);
});

test('filter action default', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_DATE' });
});

test('sort by date action', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_AMOUNT' });
});