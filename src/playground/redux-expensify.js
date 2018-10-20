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

const sortByAmount = () => ({
  type: 'SORT_AMOUNT',
});

const sortByDate = () => ({
  type: 'SORT_DATE',
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
  text: '',
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
    case 'SORT_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
    }
    case 'SORT_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
    case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    }
    case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}))


store.dispatch(setFilter('rent'));
// store.dispatch(setFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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