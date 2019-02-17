import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeExpense, editExpense, addExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('remove action', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('edit action', () => {
  const action = editExpense('123', { note: 'Note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'Note'
    }
  });
});

test('add expense', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should Add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is Better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      done();
    });
});

test('should Add expense with defaults to database and store', () => {

});

// test('add expense defaults', () => {
//   const expenseData = {};

//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       amount: 0,
//       note: '',
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });