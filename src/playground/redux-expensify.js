import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setFilter = (text = '') => ({
  type: 'SET_FILTER',
  text
});

const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
  test: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return  [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        return expense.id === action.id
          ? {
            ...expense,
            ...action.updates
          }
          : expense;
      });
    default:
      return state;
  }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}))


store.dispatch(setFilter('rent'));
store.dispatch(setFilter());

const demoState = {
  expenses: [{
    id: 'slkdjf',
    description: 'Jan Rent',
    note: 'Something about this stuff.',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}