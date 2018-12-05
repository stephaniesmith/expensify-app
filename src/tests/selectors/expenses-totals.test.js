import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toEqual(0);
});

test('should return total of all expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toEqual(114195);
});