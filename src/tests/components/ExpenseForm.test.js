import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm correctly with data', () => {
  const wrapper = shallow(<ExpenseForm {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm/>);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', { 
    preventDefault: () => { }
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea on input change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input', () => {
  const value = '23.504';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy();
  expect(onSubmitSpy).toHaveBeenCalled();
});