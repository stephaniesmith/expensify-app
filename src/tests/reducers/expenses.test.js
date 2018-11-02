import expenses from '../../reducers/expenses';
import expensesList from '../fixtures/expenses';

test('should setup default filter values', () => {
  const state = expenses(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expensesList[1].id
  };
  const state = expenses(expensesList, action);

  expect(state).toEqual([expensesList[0], expensesList[2]]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenses(expensesList, action);

  expect(state).toEqual(expensesList);
});

test('should add an expense', () => {
  const expense = {
    id: '120',
    description: 'Yup',
    note: '',
    createdAt: 20000,
    amount: 209999
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expenses(expensesList, action);
  expect(state).toEqual([...expensesList, expense]);
});

test('should edit an expense', () => {
  const amount = 1;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expensesList[1].id,
    updates: {
      amount
    }
  };

  const state = expenses(expensesList, action);
  expect(state[1].amount).toEqual(amount);
});

test('should edit an expense', () => {
  const amount = 1;

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };

  const state = expenses(expensesList, action);
  expect(state).toEqual(expensesList);
});
