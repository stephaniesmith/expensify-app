import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
  test: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
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

console.log(store.getState());

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