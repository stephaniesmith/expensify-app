import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const ReactRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
        <PrivateRoute path="/create" component={AddExpense}/>
        <Route path="/help" component={Help}/>
        <PrivateRoute path="/edit/:id" component={EditExpense}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default ReactRouter;