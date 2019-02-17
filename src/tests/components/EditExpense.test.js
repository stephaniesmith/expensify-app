import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});