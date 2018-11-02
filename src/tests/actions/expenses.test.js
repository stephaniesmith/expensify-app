import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

test('remove action', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('edit action', () => {
  const action = editExpense('123', { note: 'Note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'Note'
    }
  });
});

test('add expense', () => {
  const expenseData = {
    description: 'Rent',
    amount: 10000,
    createdAt: 1000,
    note: 'Last month rent.'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('add expense defaults', () => {
  const expenseData = {};

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      id: expect.any(String)
    }
  });
});