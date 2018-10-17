import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
  <div>
    DASHBOARD!
  </div>
)

const AddExpense = () => (
  <div>
    EXPENSE!
  </div>
)

const Edit = () => (
  <div>
    EDIT!
  </div>
)

const Help = () => (
  <div>
    HELP!
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboard} exact={true}/>
      <Route path="/create" component={AddExpense}/>
      <Route path="/edit" component={Edit}/>
      <Route path="/help" component={Help}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
