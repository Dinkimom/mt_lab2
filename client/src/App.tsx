import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { AccountForm } from './features/account/AccountForm';
import { Users } from './features/users/Users';
import { AccountControl } from './services/AccountControl';
import { DatesControl } from './services/DatesControl';
import { UsersControl } from './services/UsersControl';

export const accountControl = new AccountControl();
export const usersControl = new UsersControl();
export const datesControl = new DatesControl();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/account/form" component={AccountForm} />
          <PrivateRoute exact path="/">
            <Users />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
