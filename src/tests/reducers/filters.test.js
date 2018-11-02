import filters from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filters(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filters(undefined, { type: 'SORT_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to amount', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const state = filters(currentState, { type: 'SORT_DATE' });

  expect(state.sortBy).toEqual('date');
});

test('should set text', () => {
  const text = 'hello';
  const state = filters(undefined, { type: 'SET_FILTER', text });
  expect(state.text).toEqual('hello');
});

test('should set startDate', () => {
  const startDate = moment();
  const state = filters(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
  const endDate = moment();
  const state = filters(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toEqual(endDate);
});
